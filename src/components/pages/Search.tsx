import React from "react";
import SearchHeader from "../SearchHeader";

interface Props {}

function Search({  }: Props) {
  return (
    <div>
      <SearchHeader />
      <div>search results</div>
    </div>
  );
}

export default Search;
