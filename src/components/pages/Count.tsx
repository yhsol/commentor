import React from "react";
import SearchHeader from "../SearchHeader";
import styled from "styled-components";
import { PopularApi } from "../../utils/UseApi";

interface Props {}

const Wrapper = styled.div`
  margin-top: 10rem;
`;

function Count({}: Props) {
  const { loading, error, results } = PopularApi();
  console.log(results);
  return (
    <Wrapper>
      {!loading && <div>{results}</div>}
      <div>count</div>
    </Wrapper>
  );
}

export default Count;
