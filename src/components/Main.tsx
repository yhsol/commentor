import React from "react";
import styled from "styled-components";
import Input from "../utils/Input";

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 8rem;
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
  display: flex;
  justify-content: center;
`;

function Main() {
  return (
    <div>
      <SideMenu>header side menu</SideMenu>
      <Title>title</Title>
      <Input />
      <Categories>categories</Categories>
    </div>
  );
}

export default Main;
