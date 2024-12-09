import { renderHook, act } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import useMenuSearchPage from "./useMenuSearchPage";
import { SortOptions } from "../utils/enums";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../repositories/queryClient";

const createWrapper =
  (initialEntry: string = "/") =>
  ({ children }: { children: React.ReactNode }) =>
    (
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={[initialEntry]}>{children}</MemoryRouter>
      </QueryClientProvider>
    );

describe("useMenuSearchPage", () => {
  afterEach(() => {
    queryClient.clear();
    jest.clearAllMocks();
  });

  it("initializes query and sort state from URL parameters", () => {
    const wrapper = createWrapper("/?search=test&sort=asc");

    const { result } = renderHook(() => useMenuSearchPage(), { wrapper });

    expect(result.current.query).toBe("test");
    expect(result.current.sort).toBe(SortOptions.ASCENDING);
  });

  it("initializes with empty query and sort if not provided in URL", () => {
    const wrapper = createWrapper("/");

    const { result } = renderHook(() => useMenuSearchPage(), { wrapper });

    expect(result.current.query).toBe("");
    expect(result.current.sort).toBe("");
  });

  it("updates query state", () => {
    const wrapper = createWrapper();

    const { result } = renderHook(() => useMenuSearchPage(), { wrapper });

    act(() => {
      result.current.handleSearchChange("new-query");
    });

    expect(result.current.query).toBe("new-query");
  });

  it("updates sort state", () => {
    const wrapper = createWrapper();

    const { result } = renderHook(() => useMenuSearchPage(), { wrapper });

    act(() => {
      result.current.handleSortChange(SortOptions.DESCENDING);
    });

    expect(result.current.sort).toBe(SortOptions.DESCENDING);
  });

  it("resets query state when empty value is provided", () => {
    const wrapper = createWrapper("/?search=test");

    const { result } = renderHook(() => useMenuSearchPage(), { wrapper });

    act(() => {
      result.current.handleSearchChange("");
    });

    expect(result.current.query).toBe("");
  });

  it("resets sort state when invalid value is provided", () => {
    const wrapper = createWrapper("/?sort=INVALID");

    const { result } = renderHook(() => useMenuSearchPage(), { wrapper });

    expect(result.current.sort).toBe("");
  });
});
