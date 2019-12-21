import React from "react";
import { useFetchAll } from "../../stateManagement/hooks/useFetchAll";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledList = styled.div`
  padding: 0.3rem 0;

  &:after {
    content: "";
    display: block;
    padding: 0.3rem 0;

    width: 100%;
    border-bottom: 2px solid black;
    transition: border-bottom 0.3s;
  }
  &:hover::after {
    border-bottom: 2px solid ${props => props.theme.uiColorBlue};
  }
`;

export function PopularList() {
  const { loading, error, results } = useFetchAll.useFetchPopular();
  console.log(loading, error, results);

  return (
    <div>
      {/* {!loading && <div>{data}</div>} */}
      {loading ? (
        <div>loading...</div>
      ) : (
        <div>
          {results &&
            results.length > 0 &&
            results.map((result: any) => (
              <StyledList key={result.id}>
                <Link to={`/detail/${result.id}`}>{result.title}</Link>
              </StyledList>
            ))}
        </div>
      )}
    </div>
  );
}

export function RecentrList() {
  const { loading, error, results } = useFetchAll.useFetchRecent();
  console.log(loading, error, results);

  return (
    <div>
      {/* {!loading && <div>{data}</div>} */}
      {loading ? (
        <div>loading...</div>
      ) : (
        <div>
          {results &&
            results.length > 0 &&
            results.map((result: any) => (
              <StyledList key={result.id}>
                <Link to={`/detail/${result.id}`}>{result.title}</Link>
              </StyledList>
            ))}
        </div>
      )}
    </div>
  );
}
