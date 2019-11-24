import React from "react";
import { RecentApi } from "../../utils/UseApi";
import styled from "styled-components";
import SearchHeader from "../SearchHeader";
interface Props {}

interface ApiProps {
  loading: any;
  error: any;
  results: any;
}

const Wrapper = styled.div`
  margin: 2rem auto 0;
`;

function Recent({}: Props) {
  const { loading, error, results }: ApiProps = RecentApi();
  console.log(results);
  return (
    <div>
      <SearchHeader />
      <Wrapper>
        {/* {!loading && <div>{data}</div>} */}
        {loading ? (
          <div>loading...</div>
        ) : (
          <div>
            {results &&
              results.length > 0 &&
              results.map((result: any) => <div>{result.title}</div>)}
          </div>
        )}
        <div>count</div>
      </Wrapper>
    </div>
  );
}

export default Recent;
