import React from "react";
import { useFetchAll } from "../../stateManagement/hooks/useFetchAll";
import styled from "styled-components";

const StyledList = styled.div`
  border-bottom: 1px solid black;
  padding: 0.5rem 0;
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
              <StyledList key={result.id}>{result.title}</StyledList>
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
              <StyledList key={result.id}>{result.title}</StyledList>
            ))}
        </div>
      )}
    </div>
  );
}
