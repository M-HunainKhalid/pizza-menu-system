import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { MenuRepository } from "repositories/menuRepository";
import { Menu, SortType } from "utils/types";
import { useDebounce } from "use-debounce";

export const useMenuSearch = (
  query: string,
  sort?: SortType
): UseQueryResult<Menu[], Error> => {
  const [debouncedQuery] = useDebounce(query.trim(), 500);
  return useQuery({
    queryKey: ["menus", debouncedQuery, sort],
    queryFn: () => MenuRepository.getMenusData(debouncedQuery, sort),
  });
};
