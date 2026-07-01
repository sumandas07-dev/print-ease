import "./SearchBar.css";
import { IoSearch } from "react-icons/io5";

function SearchBar() {
  return (
    <div className="search-container mb-4">

      <div className="input-group">

        <span className="input-group-text search-icon">
          <IoSearch />
        </span>

        <input
          type="text"
          className="form-control search-input"
          placeholder="Search for a service"
        />

      </div>

    </div>
  );
}

export default SearchBar;