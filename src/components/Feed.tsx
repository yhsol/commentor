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
  border-bottom: 0.2rem solid black;
  display: grid;
  grid-template-columns: 2fr 8fr;
  gap: 1rem;
`;

const Poster = styled.div`
  height: 200px;
`;

const Image = styled.img`
  max-block-size: -webkit-fill-available;
`;

const TitleSection = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
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
        <Image
          src={`https://image.tmdb.org/t/p/w200/${image}`}
          alt="poster image"
        />
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
