import React from "react";
import styled from "styled-components";
import OpenMenu from "../../utils/OpenMenu";
import Input from "../../utils/Input";

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 8rem;
  height: 10rem;
  margin-top: 8rem;
  min-height: fit-content;
  position: relative;
`;

const SideMenu = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const SearchInput = styled.div`
  display: flex;
  justify-content: center;
`;

const Categories = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: 5rem;
  justify-content: center;
  align-items: center;
  width: 500px;
  margin: 0 auto;
`;

const CategoriesItems = styled.div`
  text-align: center;
`;

function Main() {
  return (
    <div>
      <SideMenu>
        <OpenMenu />
      </SideMenu>
      <div>
        <Title>title</Title>
        <Input />
        <Categories>
          <CategoriesItems>popular</CategoriesItems>
          <CategoriesItems>recent</CategoriesItems>
          <CategoriesItems>viewd</CategoriesItems>
        </Categories>
      </div>
    </div>
  );
}

export default Main;
