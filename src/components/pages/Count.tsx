import React, { useState, useEffect, useCallback } from "react";
import SearchHeader from "../SearchHeader";
import styled from "styled-components";
import { PopularApi } from "../../utils/UseApi";
import Axios from "axios";
import { movieApi } from "../../utils/AxiosInstance";
import Feed from "../Feed";
import Header from "../Header";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../tdd/redux/modules";
import { fetchPopular } from "../../stateManagement/modules/fetchPopularReducer";
import { useFetchAll } from "../../stateManagement/hooks/useFetchAll";

interface Props {}

interface ApiProps {
  loading: any;
  error: any;
  results: any;
}

const Wrapper = styled.div`
  margin: 5rem auto 0;
`;

const SHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
`;

function Count({}: Props) {
  const { loading, error, results } = useFetchAll.useFetchPopular();

  console.log(loading);
  console.log(error);
  console.log(results);

  return (
    <div>
      <SHeader>
        <Header />
      </SHeader>
      <Wrapper>
        {/* {!loading && <div>{data}</div>} */}
        {loading ? (
          <div>loading...</div>
        ) : (
          <div>
            {results &&
              results.length > 0 &&
              results.map((result: any) => (
                <Feed
                  key={result.id}
                  id={result.id}
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

export default Count;
