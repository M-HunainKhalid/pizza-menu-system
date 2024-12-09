import axiosClient from "../repositories/axiosClient";
import { handleApiResponse } from "../utils/apiUtils";
import { SortType } from "../utils/types";

export const MenuRepository = {
  getMenusData: async (searchQuery?: string, sort?: SortType) => {
    const { data } = await axiosClient.get("/menus", {
      params: {
        search: searchQuery || undefined,
        sort: sort || undefined,
      },
    });

    const validatedData = handleApiResponse(data);

    return validatedData.search;
  },
};
