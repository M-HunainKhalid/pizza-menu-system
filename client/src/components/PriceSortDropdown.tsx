import { SortOptions } from "../utils/enums";
import { SortType } from "../utils/types";

interface PriceSortDropdownProps {
  sort: SortType;
  onSortChange: (value: SortType) => void;
}

const PriceSortDropdown = ({ sort, onSortChange }: PriceSortDropdownProps) => (
  <div className="sort-dropdown-container">
    <label className="sort-dropdown-label" aria-label="Sort by price">
      Sort by Price:
    </label>
    <select
      id="sort-dropdown"
      className="sort-dropdown"
      value={sort}
      onChange={(e) => onSortChange(e.target.value as SortType)}
    >
      <option value="">None</option>
      <option value={SortOptions.ASCENDING}>Low to High</option>
      <option value={SortOptions.DESCENDING}>High to Low</option>
    </select>
  </div>
);

export default PriceSortDropdown;
