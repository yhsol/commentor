import React, { FormEvent, ChangeEvent, useState } from "react";
import styled, { css } from "styled-components";
import UserMenu from "../../utils/UserMenu";
import { Link } from "react-router-dom";
import { WithProps } from "../../styles/WithProps";
import SearchInput from "../../utils/SearchInput";
import CustomSearchInput from "../../utils/CustomSearchInput";

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 8rem;
  height: 10rem;
  margin-top: 8rem;
  min-height: fit-content;
  position: relative;
  color: ${props => props.color || "black"};
`;

const SideMenu = styled.div`
  display: flex;
  justify-content: flex-end;
`;

// const SearchInput = styled.div`
//   display: flex;
//   justify-content: center;
// `;

const Categories = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: 5rem;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 23rem;
`;

const CategoriesItem = styled.div<WithProps>`
  text-align: center;
  height: 2rem;
  ${props =>
    props.fontsize &&
    css`
      font-size: 14px;
    `}
  &:after {
    content: "";
    display: block;
    padding-bottom: 1rem;
    width: 0;
    height: 2px;
    border-bottom: 2px solid ${props => props.theme.uiColorBlue};
    transition: width 0.3s;
  }
  &:hover::after {
    width: 100%;
    /* transition: width 0.3s; */
  }
`;

function Main() {
  return (
    <div>
      <SideMenu>
        <UserMenu />
      </SideMenu>
      <div>
        <Title>title</Title>
        <div>
          <CustomSearchInput
            widthProps={26}
            heightProps={3.5}
            backgroundColorProps={"white"}
            inputFontSize={"1.5rem"}
            borderProps={"0.2rem solid black"}
          />
        </div>
        <Categories>
          <Link to="/count">
            <CategoriesItem fontsize={false}>count</CategoriesItem>
          </Link>
          <Link to="/recent">
            <CategoriesItem>recent</CategoriesItem>
          </Link>
          <Link to="/viewd">
            <CategoriesItem>viewd</CategoriesItem>
          </Link>
        </Categories>
      </div>
    </div>
  );
}

export default Main;
