import { useDispatch, useSelector } from "react-redux";
import "./Filter.css";
import { filterSlice } from "../../store/slises/filterSlice";

const Filter = () => {
  const { filterByTitle, filterByAuthor, favoriteBooks } = useSelector(
    (state) => {
      return state.filter;
    }
  );
  const dispatch = useDispatch();
  const handleTitleFilterChange = (e) => {
    dispatch(filterSlice.actions.titleValueHandler(e.target.value));
  };

  const handleAuthorFilterChange = (e) => {
    dispatch(filterSlice.actions.authorValueHandler(e.target.value));
  };

  const handleOnlyFavoriteFilterChange = () => {
    dispatch(filterSlice.actions.onlyFavorites());
  };

  const handleResetFilters = () => {
    dispatch(reseFilter.actions.reseFilter());
  };

  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input
            type="text"
            placeholder="Filter by title..."
            onChange={handleTitleFilterChange}
            value={filterByTitle}
          />
        </div>
        <div className="filter-group">
          <input
            type="text"
            placeholder="Filter by author..."
            onChange={handleAuthorFilterChange}
            value={filterByAuthor}
          />
        </div>
        <div className="filter-group">
          <label>
            <input
              type="checkbox"
              onChange={handleOnlyFavoriteFilterChange}
              checked={favoriteBooks}
            />
            Only Favorite
          </label>
        </div>
        <button type="button" onClick={handleResetFilters}>
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default Filter;
