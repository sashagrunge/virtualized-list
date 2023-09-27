import React, { useCallback, useMemo, useRef } from "react";
import { DefaultRowType, VirtualizedListProps } from "./types";
import {
  Cell,
  ItemRow,
  ListHeaders,
  Row,
  RowCountContainer,
  ScrollContent,
  ScrollView,
  ToolBar,
  ToolBarButton,
  VirtualizedListWrapper,
} from "./styled";
import { useListMeasurement } from "./useListMeasurement";
import { useRowsInView } from "./useRowsInView";

function VirtualizedList<TRow extends DefaultRowType>({
  columns,
  rowHeight,
  height,
  rows,
}: VirtualizedListProps<TRow>) {
  const rowCount = useMemo(() => rows.length, [rows.length]);
  const { contentHeight, rowInViewCount, scrollViewHeight, colWidth } =
    useListMeasurement({
      rowCount,
      rowHeight,
      height,
      colCount: columns.length,
    });

  const { handleScroll, rowsInView } = useRowsInView({
    rows,
    rowHeight,
    rowInViewCount,
  });

  const scrollContentRef = useRef<HTMLDivElement>(null);

  const onBackToTop = useCallback(() => {
    scrollContentRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <VirtualizedListWrapper
      className="VirtualizedList-root"
      data-testid="VirtualizedList"
      role="grid"
    >
      <ToolBar>
        <ToolBarButton type="button" onClick={onBackToTop}>
          Back to top
        </ToolBarButton>
        <RowCountContainer>Total Rows: {rowCount}</RowCountContainer>
      </ToolBar>

      <ListHeaders className="VirtualizedList-header">
        <Row height={rowHeight}>
          {columns.map(({ field, headerName }) => (
            <Cell key={field} width={colWidth} isHeader>
              {headerName}
            </Cell>
          ))}
        </Row>
      </ListHeaders>
      <ScrollView
        height={scrollViewHeight}
        data-testid="VirtualizedList-scrollView"
        onScroll={handleScroll}
      >
        <ScrollContent
          height={contentHeight}
          ref={scrollContentRef}
          data-testid="VirtualizedList-scrollContent"
        >
          {rowsInView.map(({ key, row, position: { top } }) => (
            <ItemRow key={key} height={rowHeight} top={top}>
              {columns.map(({ field }) => (
                <Cell key={field} width={colWidth}>
                  {row[field]}
                </Cell>
              ))}
            </ItemRow>
          ))}
        </ScrollContent>
      </ScrollView>
    </VirtualizedListWrapper>
  );
}

export default VirtualizedList;
