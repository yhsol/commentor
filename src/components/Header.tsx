import React from "react";
import SearchInput from "../utils/SearchInput";
import styled from "styled-components";
import CustomSearchInput from "../utils/CustomSearchInput";
import { Link } from "react-router-dom";
import { UserIcon } from "../utils/Icons";

const Wrapper = styled.div`
  ${props => props.theme.boldBox}
  border-right: none;
  border-left: none;
  height: 3.8rem;
  font-size: 1.7rem;
  font-weight: bold;

  display: grid;
  grid-template-columns: 1.5fr 3fr 1fr 1fr 1fr 1fr 1fr;
  background-color: black;
  gap: 0.2rem;
  justify-content: center;
  align-items: center;

  @media (max-width: 890px) {
    grid-template-columns: 3fr 4fr 3fr;
  }
`;

const Title = styled.span`
  /* border-right: 0.2rem solid black;
  width: 8rem;
  height: 100%; */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  height: 100%;
`;

const TitleLink = styled(Link)`
  /* border-right: 0.2rem solid black;
  width: 8rem;
  height: 100%; */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  height: 100%;
  width: 100%;
`;

const NavInfo = styled.span`
  background-color: white;
`;

const NavItem = styled.span`
  background-color: white;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Categories = styled.span`
  background-color: white;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 890px) {
    display: none;
  }
`;

const SelectMenu = styled.select`
  appearance: none;
  border: none;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-align-last: center;
  font-size: inherit;
  font-weight: inherit;
  cursor: pointer;
`;

interface Props {}

function Header({}: Props) {
  return (
    <Wrapper>
      <Title>
        <TitleLink to="/title">title</TitleLink>
      </Title>
      <NavItem>
        <CustomSearchInput
          backgroundColorProps={"white"}
          inputFontSize={"1.5rem"}
        />
      </NavItem>
      <NavItem>
        <SelectMenu>
          <option>menu</option>
          <option>user</option>
          <option>popular</option>
          <option>recent</option>
          <option>viwed</option>
        </SelectMenu>
      </NavItem>
      <Categories>
        <Link to="/count">popular</Link>
      </Categories>
      <Categories>
        <Link to="/recent">recent</Link>
      </Categories>
      <Categories>
        <Link to="/viewd">viewd</Link>
      </Categories>
      <Categories>
        <Link to="/user">
          <UserIcon fill={"balck"} size={26} />
        </Link>
      </Categories>
    </Wrapper>
  );
}

export default Header;
