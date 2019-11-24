import React, { useState, useEffect } from "react";
import SearchHeader from "../SearchHeader";
import styled from "styled-components";
import { PopularApi } from "../../utils/UseApi";
import Axios from "axios";
import { movieApi } from "../../utils/AxiosInstance";

interface Props {}

interface ApiProps {
  loading: any;
  error: any;
  results: any;
}

const Wrapper = styled.div`
  margin: 2rem auto 0;
`;

function Viewd({}: Props) {
  const { loading, error, results }: ApiProps = PopularApi();

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

export default Viewd;
