import { act, renderHook, waitFor } from "@testing-library/react";
import { useRowsInView } from "../useRowsInView";

const ROW_COUNT = 30;

const createMockItem = (id: number) => ({
  col1: `item${id}-col1`,
  col2: `item${id}-col2`,
  col3: `item${id}-col3`,
});

const createMockItems = (count: number) => {
  let mocks = [];
  for (let i = 0; i < count; i++) {
    mocks.push(createMockItem(i));
  }
  return mocks;
};

const MOCK_ITEMS = createMockItems(ROW_COUNT);

const MOCK_PROPS = {
  rows: MOCK_ITEMS,
  rowHeight: 20,
  rowInViewCount: 3,
};

const createMockScrollEvent = (scrollTop: number) =>
  ({
    currentTarget: { scrollTop },
  } as React.UIEvent<HTMLDivElement, UIEvent>);

describe("useRowsInView", () => {
  test("it should calculate the rows before scroll", () => {
    const { result } = renderHook(() => useRowsInView(MOCK_PROPS));

    expect(result.current.rowsInView).toEqual([
      {
        key: 0,
        row: createMockItem(0),
        position: { top: 0 },
      },
      {
        key: 1,
        row: createMockItem(1),
        position: { top: 20 },
      },
      {
        key: 2,
        row: createMockItem(2),
        position: { top: 40 },
      },
      {
        key: 3,
        row: createMockItem(3),
        position: { top: 60 },
      },
      {
        key: 4,
        row: createMockItem(4),
        position: { top: 80 },
      },
      {
        key: 5,
        row: createMockItem(5),
        position: { top: 100 },
      },
    ]);
  });

  test("it should calculate the rows in view when scrolling", async () => {
    const { result } = renderHook(() => useRowsInView(MOCK_PROPS));

    act(() => {
      result.current.handleScroll(createMockScrollEvent(300));
    });

    await waitFor(() =>
      expect(result.current.rowsInView).toEqual([
        {
          key: 12,
          row: createMockItem(12),
          position: { top: 240 },
        },
        {
          key: 13,
          row: createMockItem(13),
          position: { top: 260 },
        },
        {
          key: 14,
          row: createMockItem(14),
          position: { top: 280 },
        },
        {
          key: 15,
          row: createMockItem(15),
          position: { top: 300 },
        },
        {
          key: 16,
          row: createMockItem(16),
          position: { top: 320 },
        },
        {
          key: 17,
          row: createMockItem(17),
          position: { top: 340 },
        },
        {
          key: 18,
          row: createMockItem(18),
          position: { top: 360 },
        },
        {
          key: 19,
          row: createMockItem(19),
          position: { top: 380 },
        },
        {
          key: 20,
          row: createMockItem(20),
          position: { top: 400 },
        },
      ])
    );
  });

  test("it should show all items if the list size is smaller than the view size", () => {
    const { result } = renderHook(() =>
      useRowsInView({ ...MOCK_PROPS, rows: [MOCK_ITEMS[0]] })
    );

    expect(result.current.rowsInView).toEqual([
      {
        key: 0,
        row: createMockItem(0),
        position: { top: 0 },
      },
    ]);
  });
});
