import styled from "styled-components";
import { Button } from "../Button/Button";

export const VirtualizedListWrapper = styled.div`
  border: 4px solid ${({ theme }) => theme.color.border};
`;

export const ListHeaders = styled.div.attrs((props) => ({
  role: "rowgroup",
}))``;

export const ScrollContent = styled.div.attrs<{ height: number }>((props) => ({
  role: "presentation",
}))`
  height: ${({ height }) => height}px;
`;

export const ScrollView = styled.div.attrs<{ height: number }>((props) => ({
  role: "rowgroup",
}))`
  height: ${({ height }) => height}px;
  overflow: scroll;
  position: relative;
`;

export const ScrollRenderZone = styled.div.attrs<{ height: number }>(
  (props) => ({
    role: "rowgroup",
  })
)``;

export const Row = styled.div.attrs<{ height: number }>((props) => ({
  role: "row",
}))`
  display: flex;
  justify-content: stretch;
  height: ${({ height }) => height}px;
`;

export const ItemRow = styled.div.attrs<{ height: number; top: number }>(
  (props) => ({
    role: "row",
  })
)`
  display: flex;
  justify-content: stretch;
  height: ${({ height }) => height}px;
  top: ${({ top }) => top}px;
  position: absolute;
  width: 100%;
`;

export const Cell = styled.div.attrs<{ width: string; isHeader?: boolean }>(
  ({ isHeader }) => ({
    role: isHeader ? "columnheader" : "cell",
  })
)`
  width: ${({ width }) => width};
  border: ${({ isHeader }) => (isHeader ? "2px" : "1px")} solid
    ${({ theme }) => theme.color.border};
  font-size: ${({ isHeader }) => (isHeader ? "16px" : "14px")};
  font-weight: ${({ isHeader }) => (isHeader ? 600 : 400)};
  line-height: ${({ isHeader }) => (isHeader ? "19px" : "17px")};
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

export const ToolBar = styled.div`
  padding: 16px;
  border-bottom: 4px solid ${({ theme }) => theme.color.border};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ToolBarButton = styled(Button)`
  padding: 16px;
`;

export const RowCountContainer = styled.div``;
