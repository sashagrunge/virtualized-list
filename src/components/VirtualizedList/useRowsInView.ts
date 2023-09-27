import { useMemo, useState } from "react";

const IN_VIEW_BUFFER = 3;

type UseRowsInViewProps<TRow> = {
  rows: TRow[];
  rowHeight: number;
  rowInViewCount: number;
};

type RowView<TRow> = {
  key: number;
  row: TRow;
  position: {
    top: number;
  };
};

export const useRowsInView = <TRow>({
  rows,
  rowHeight,
  rowInViewCount,
}: UseRowsInViewProps<TRow>) => {
  const [throttledScrollTop, setThrottledScrollTop] = useState(0);
  const [isTicking, setIsTicking] = useState(false);

  const handleScroll = (event: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const { scrollTop } = event.currentTarget;
    if (!isTicking) {
      window.requestAnimationFrame(() => {
        setThrottledScrollTop(scrollTop);
        setIsTicking(false);
      });

      setIsTicking(true);
    }
  };

  const firstRowInView = useMemo(
    () => Math.floor(throttledScrollTop / rowHeight),
    [rowHeight, throttledScrollTop]
  );

  const rowsInView = useMemo(() => {
    const first = Math.max(firstRowInView - IN_VIEW_BUFFER, 0);
    const last = Math.min(
      firstRowInView + (rowInViewCount - 1) + IN_VIEW_BUFFER,
      rows.length - 1
    );
    const rowViews: RowView<TRow>[] = [];

    for (let i = first; i <= last; i++) {
      rowViews.push({
        key: i,
        row: rows[i],
        position: {
          top: rowHeight * i,
        },
      });
    }
    return rowViews;
  }, [firstRowInView, rowHeight, rowInViewCount, rows]);

  return { handleScroll, rowsInView };
};
