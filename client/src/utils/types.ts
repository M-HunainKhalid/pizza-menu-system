import { SortOptions } from "./enums";

export interface Menu {
  id: number;
  name: string;
  price: number;
}

export type SortType = SortOptions | "";
