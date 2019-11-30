import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  image: string;
  overview: string;
  vote_average?: string;
  release_date: string;
}

const Wrapper = styled.div`
  padding: 2rem;
  border-bottom: 1px solid black;
  display: grid;
  grid-template-columns: 2fr 8fr;
`;

const Poster = styled.div``;

const TitleSection = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.span`
  font-size: 1.5rem;
`;

const Vote = styled.span`
  margin-left: 2rem;
`;

const Overview = styled.div``;

const Info = styled.div``;

function Feed({ title, image, overview, vote_average, release_date }: Props) {
  return (
    <Wrapper>
      <Poster>
        <img src={image} alt="poster image" />
      </Poster>
      <div>
        <TitleSection>
          <Title>{title}</Title>
          <Vote>release_date: {release_date}</Vote>
        </TitleSection>
        <Overview>{overview}</Overview>
      </div>
    </Wrapper>
  );
}

export default Feed;
