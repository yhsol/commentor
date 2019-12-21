import React, { FormEvent, ChangeEvent, useState, useEffect } from "react";
import styled, { css } from "styled-components";
import UserMenu from "../../utils/UserMenu";
import { Link } from "react-router-dom";
import { WithProps } from "../../styles/WithProps";
import CustomSearchInput from "../../utils/CustomSearchInput";
import { PopularList, RecentrList } from "./List";

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

const Categories = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: 5rem;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 26rem;
`;

const CategoriesItem = styled.button<WithProps>`
  text-align: center;
  height: 2rem;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 0;
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
  }
  border: none;
  background: none;
  cursor: pointer;
`;

const StyledList = styled.div<WithProps>`
  width: 26rem;
  margin: 0 auto;
  font-size: 1rem;
`;

const StyledListTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const StyledButton = styled.button`
  margin: 0 1rem;
  padding: 0;
  border: none;
  background: none;
  color: ${props => props.theme.uiColorBlue};
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
`;

function Main() {
  const [selectText, setSelectText] = useState("");
  const [selectList, setSelectList] = useState(selectText);
  const [open, setOpen] = useState(false);
  const handleSelectList = (selectText: string) => {
    setSelectText(selectText);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setSelectList(selectText);
    return () => {};
  }, [selectText]);

  return (
    <div>
      <SideMenu>
        <UserMenu />
      </SideMenu>
      <div>
        <Title>noteit</Title>
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
          <CategoriesItem
            fontsize={false}
            onClick={() => handleSelectList("popular")}
            selectProps={selectText === "popular"}
          >
            count
          </CategoriesItem>
          <CategoriesItem
            onClick={() => handleSelectList("recent")}
            selectProps={selectText === "recent"}
          >
            recent
          </CategoriesItem>
          <CategoriesItem
            onClick={() => handleSelectList("viewd")}
            selectProps={selectText === "viewd"}
          >
            viewd
          </CategoriesItem>
        </Categories>
        {open === true && (
          <div>
            {selectList === "popular" && (
              <StyledList>
                <StyledListTitle>
                  <Link to="/count">GO TO COUNT PAGE</Link>
                  <StyledButton onClick={handleClose}> X</StyledButton>
                </StyledListTitle>
                <PopularList />
              </StyledList>
            )}
            {selectList === "recent" && (
              <StyledList>
                <StyledListTitle>
                  <Link to="/recent">GO TO RECENT PAGE</Link>
                  <StyledButton onClick={handleClose}>X</StyledButton>
                </StyledListTitle>
                <RecentrList />
              </StyledList>
            )}
            {selectList === "viewd" && (
              <StyledList>
                <StyledListTitle>
                  <Link to="/viewd">GO TO VIEWD PAGE</Link>
                  <StyledButton onClick={handleClose}>X</StyledButton>
                </StyledListTitle>
                <PopularList />
              </StyledList>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Main;
