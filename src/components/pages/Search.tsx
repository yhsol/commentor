import React, { useState } from "react";
import SearchHeader from "../SearchHeader";
import { SearchApi } from "../../utils/UseApi";

interface Props {}

interface ApiProps {
  loading: any;
  error: any;
  results: any;
}

function Search({}: Props) {
  const [term, setterm] = useState("hello");
  const { loading, error, results }: ApiProps = SearchApi(term);
  console.log(results);
  return (
    <div>
      <div>search results</div>
    </div>
  );
}

export default Search;
