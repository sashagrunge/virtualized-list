export type ColDef = {
  field: string;
  headerName: string;
};

export type DefaultRowType = Record<string, string>;

export type VirtualizedListProps<TRow extends DefaultRowType> = {
  columns: ColDef[];
  rows: TRow[];
  rowHeight: number;
  height: number;
};
