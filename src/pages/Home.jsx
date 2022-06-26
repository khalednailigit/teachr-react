import SideMenu from "../components/sideMenu/sideMenu";
import SearchBar from "../components/searchBar";
import { useState } from "react";
import MainContent from "../components/mainContent/mainContent";

function Home() {
  const [searchInput, setSearchInput] = useState("");
  return (
    <section className="HomePage">
      <SideMenu />
      <div className="HomePage__content">
        <SearchBar setSearchInput={setSearchInput} />
        <MainContent searchValue={searchInput} />
      </div>
    </section>
  );
}

export default Home;
