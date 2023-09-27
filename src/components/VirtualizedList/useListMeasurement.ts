import { useMemo } from "react";

type UseListMeasurementProps = {
  rowCount: number;
  rowHeight: number;
  height: number;
  colCount: number;
};

export const useListMeasurement = ({ rowCount, rowHeight, height, colCount }: UseListMeasurementProps) => {
  const contentHeight = useMemo(() => rowCount * rowHeight, [rowCount, rowHeight]);

  const scrollViewHeight = useMemo(() => height - rowHeight, [height, rowHeight]);

  const rowInViewCount = useMemo(() => Math.ceil(scrollViewHeight / rowHeight), [rowHeight, scrollViewHeight]);

  const colWidth = useMemo(() => `${100 / colCount}%`, [colCount]);

  return { contentHeight, rowInViewCount, scrollViewHeight, colWidth };
};
