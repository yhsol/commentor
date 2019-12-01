import React, { useState, useEffect } from "react";
import SearchHeader from "../SearchHeader";
import { SearchApi } from "../../utils/UseApi";
import styled from "styled-components";
import Feed from "../Feed";
import { withRouter, RouteComponentProps } from "react-router";
import SearchInput from "../../utils/SearchInput";

interface Props {
  termProps: string;
}

interface ApiProps {
  loading: any;
  error: any;
  results: any;
}

const Wrapper = styled.div`
  margin: 2rem auto 0;
`;

const SelectBox = styled.select`
  width: 8rem;
  height: 2.3rem;
  font-size: 1.2rem;
`;

const SelectOptions = styled.option`
  font-size: 1.2rem;
  font-size: 1.2rem;
`;

function Search(props: RouteComponentProps) {
  const [value, setValue] = useState("");
  const [term, setTerm] = useState(value || "");
  const [searchTerm, setSearchTerm] = useState(
    props.location.pathname.split("/")[2]
  );
  const { loading, error, results }: ApiProps = SearchApi(
    props.location.pathname.split("/")[2]
  );

  const [selected, setSelected] = useState("popular");
  function handleSelected(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelected(e.target.value);
  }

  const onChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const value = e.target.value;
    setValue(value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTerm(value);
  };

  return (
    <div>
      <SearchHeader />
      <Wrapper>
        {loading ? (
          <div>loading...</div>
        ) : (
          <div>
            <SelectBox value={selected} onChange={handleSelected}>
              <SelectOptions value="popular">popular</SelectOptions>
              <SelectOptions value="recent">recent</SelectOptions>
              <SelectOptions value="viewd">viewd</SelectOptions>
            </SelectBox>
            {results &&
              results.length > 0 &&
              results.map((result: any) => (
                <Feed
                  key={result.id}
                  title={result.original_title}
                  image={result.poster_path}
                  overview={result.overview}
                  vote_average={result.vote_average}
                  release_date={result.release_date}
                />
              ))}
          </div>
        )}
      </Wrapper>
    </div>
  );
}

export default withRouter(Search);
