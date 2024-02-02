import React from "react";
import "./Where.css";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

function Where() {
  const searchResultForDestination = () => {};
  return (
    <div className="where">
      <h4>Where</h4>
      <input
        type="text"
        placeholder="Search destinations"
        onClick={() => searchResultForDestination}
      />
    </div>
  );
}

export default Where;
