import React from "react";
import "./SearchArea.css";
import Where from "./Where/Where";
import When from "./When/when";
import Who from "./Who/Who";
import { FiSearch } from "react-icons/fi";

function SearchArea() {
  return (
    <div className="searchArea">
      <Where />
      <hr />
      <When />
      <hr />
      <Who />
      <FiSearch className="icon" />
    </div>
  );
}

export default SearchArea;
