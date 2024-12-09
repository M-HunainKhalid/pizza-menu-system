import SearchBar from "components/SearchBar";
import MenuCard from "components/MenuCard";
import LoadingErrorWrapper from "components/LoadingErrorWrapper";
import useMenuSearchPage from "hooks/useMenuSearchPage";
import PriceSortDropdown from "components/PriceSortDropdown";

const MenuSearchPage = () => {
  const {
    query,
    menu,
    isLoading,
    isError,
    error,
    handleSearchChange,
    sort,
    handleSortChange,
  } = useMenuSearchPage();

  return (
    <div className="container">
      <h2>Costa Rica Pizzeria Menu</h2>
      <div className="search-sort-container">
        <SearchBar value={query} onChange={handleSearchChange} />
        <PriceSortDropdown sort={sort} onSortChange={handleSortChange} />
      </div>
      <LoadingErrorWrapper
        isLoading={isLoading}
        loadingMessage="Loading menu..."
        isError={isError}
        errorMessage={error?.message}
      >
        {menu?.map((menus) => (
          <MenuCard key={menus.id} menu={menus} />
        ))}
      </LoadingErrorWrapper>
    </div>
  );
};

export default MenuSearchPage;
