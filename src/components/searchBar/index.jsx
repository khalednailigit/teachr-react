import Search from "../svgs/search";
import { useState } from "react";

function SearchBar({ setSearchInput }) {
  const [searchValue, setSearchValue] = useState("");
  const searchHandler = () => {
    setSearchInput(searchValue);
  };

  return (
    <div className="searchBar">
      <h2 className="searchBar__title">
        En quelle matière avez-vous besoin d'aide ?
      </h2>
      <div className="searchBar__field">
        <input
          className="searchBar__field--input"
          type="text"
          placeholder="SVT, math, pianno, anglais..."
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Search sx="searchBar__field--icon" onSearch={searchHandler} />
      </div>
    </div>
  );
}

export default SearchBar;
