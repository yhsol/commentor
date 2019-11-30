import React from "react";
import SearchInput from "../utils/SearchInput";

interface Props {}

function Header({}: Props) {
  return (
    <div>
      <span>title</span>
      <SearchInput />
    </div>
  );
}

export default Header;
