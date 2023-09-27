import { renderHook } from "@testing-library/react";
import { useListMeasurement } from "../useListMeasurement";

const MOCK_PROPS = {
  rowCount: 1000,
  rowHeight: 20,
  height: 80,
  colCount: 2,
};

describe("useListMeasurement", () => {
  test("it should calculate the content height of all items", () => {
    const { result } = renderHook(() => useListMeasurement(MOCK_PROPS));

    expect(result.current.contentHeight).toBe(20000);
  });

  test("it should calculate number of row in view", () => {
    const { result } = renderHook(() => useListMeasurement(MOCK_PROPS));

    expect(result.current.rowInViewCount).toBe(3);
  });

  test("it should calculate scroll view height", () => {
    const { result } = renderHook(() => useListMeasurement(MOCK_PROPS));

    expect(result.current.scrollViewHeight).toBe(60);
  });

  test("it should calculate column width", () => {
    const { result } = renderHook(() => useListMeasurement(MOCK_PROPS));

    expect(result.current.colWidth).toBe("50%");
  });
});
