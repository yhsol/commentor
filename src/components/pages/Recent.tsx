import React, { useCallback, useEffect } from "react";
import { RecentApi } from "../../utils/UseApi";
import styled from "styled-components";
import SearchHeader from "../SearchHeader";
import Feed from "../Feed";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecent } from "../../stateManagement/modules/fetchRecent";
import { RootState } from "../../tdd/redux/modules";
interface Props {}

interface ApiProps {
  loading: any;
  error: any;
  results: any;
}

const Wrapper = styled.div`
  margin: 5rem auto 0;
`;

const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
`;

function Recent({}: Props) {
  // const { loading, error, results }: ApiProps = RecentApi();

  const dispatch = useDispatch();
  const fetchDispatch = useCallback(() => dispatch(fetchRecent()), []);

  useEffect(() => {
    fetchDispatch();
  }, [dispatch]);

  const fetchSelect: any =
    useSelector((state: RootState) => state.fetchRecent) || [];
  const { loading, error, results } = fetchSelect;
  console.log(loading);
  console.log(error);
  console.log(results);

  return (
    <div>
      <Header>
        <SearchHeader />
      </Header>
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

export default Recent;
