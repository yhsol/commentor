import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Feed from "../Feed";
import Header from "../Header";
import { useFetchAll } from "../../stateManagement/hooks/useFetchAll";
import Pagination from "../../utils/Pagination";
import { withRouter } from "react-router-dom";
import queryString from "query-string";

const Wrapper = styled.div`
  margin: 5rem auto 0;
`;

const SHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
`;

function Count({ history, location, match }: any) {
  const { loading, error, results } = useFetchAll.useFetchPopular();

  const query = queryString.parse(location.search);

  const [currentPage, setCurrentPage] = useState<any>(query.page || 1);
  const [postPerPage, setPostPerPage] = useState(5);

  const indexOfLastPost = parseInt(currentPage) * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;

  const currentPosts = results.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => console.log(pageNumber);

  useEffect(() => {
    setCurrentPage(query.page);
  }, [query.page]);

  // 지금은 currentPage 가 query 값을 가져와서 그것을 읽기때문에 paginate 에서의 변화가 의미가 없다.
  // 또 다르게 이야기하면 query 값을 가져와서 읽는게 아니라 그냥 함수로 전달받은 값을 반영해서 보여줄 수도 있다는 것.
  // 어떤것이 더 효율적인지 파악하고 적용하기.
  // 개쩐다!!! useEffect 에서 deps 로 query.page 를 설정하고
  // 그에 따라 setCurrentPage 를 변경하도록 하면 그 값을 주시하다가 값이 변경되면 반영한다!!
  console.log(query);
  console.log(currentPosts.map((post: any) => post.title));
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
            {currentPosts &&
              currentPosts.length > 0 &&
              currentPosts.map((result: any) => (
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
            <Pagination
              postPerPage={postPerPage}
              totalPosts={results.length}
              paginate={paginate}
              match={match}
              currentPage={currentPage}
              query={query}
            />
            {query.page}
          </div>
        )}
      </Wrapper>
    </div>
  );
}

export default withRouter(Count);
