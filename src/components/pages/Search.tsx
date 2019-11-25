import React, { useState } from "react";
import SearchHeader from "../SearchHeader";
import { SearchApi } from "../../utils/UseApi";
import styled from "styled-components";

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

function Search({ termProps }: Props) {
  const [value, setValue] = useState("");
  const [term, setTerm] = useState(value || "");
  const { loading, error, results }: ApiProps = SearchApi(term);
  console.log(results);
  console.log(value);

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
        <form onSubmit={onSubmit}>
          <input type="text" onChange={onChange} />
        </form>
        {/* {!loading && <div>{data}</div>} */}
        {loading ? (
          <div>loading...</div>
        ) : (
          <div>
            {results &&
              results.length > 0 &&
              results.map((result: any) => (
                <div key={result.id}>{result.title}</div>
              ))}
          </div>
        )}
      </Wrapper>
    </div>
  );
}

export default Search;
