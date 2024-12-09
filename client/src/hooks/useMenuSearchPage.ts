import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useMenuSearch } from "../hooks/useMenuSearch";
import { useDebouncedCallback } from "use-debounce";
import { SortType } from "../utils/types";
import { SortOptions } from "../utils/enums";

const useMenuSearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortType>("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setQuery(params.get("search") || "");
    const sortParam = params.get("sort");
    setSort(
      sortParam === SortOptions.ASCENDING ||
        sortParam === SortOptions.DESCENDING
        ? sortParam
        : ""
    );
  }, [location.search]);

  const handleUrl = useDebouncedCallback(
    (searchValue: string, sortValue?: SortType) => {
      const params = new URLSearchParams();

      if (searchValue) {
        params.set("search", searchValue.trim());
      }

      if (sortValue) {
        params.set("sort", sortValue);
      }

      navigate({ search: params.toString() }, { replace: true });
    },
    500
  );

  const handleSearchChange = (value: string) => {
    setQuery(value);
    handleUrl(value, sort);
  };

  const handleSortChange = (value: SortType) => {
    setSort(value);
    handleUrl(query, value);
  };

  const { data: menu, isLoading, isError, error } = useMenuSearch(query, sort);

  return {
    query,
    sort,
    menu,
    isLoading,
    isError,
    error,
    handleSearchChange,
    handleSortChange,
  };
};

export default useMenuSearchPage;
