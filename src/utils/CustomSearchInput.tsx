import React, { useState } from "react";
import styled from "styled-components";
import { SearchIcon } from "./Icons";
import { Link, withRouter } from "react-router-dom";
import { RouteChildrenProps, RouteComponentProps } from "react-router";
import { WithProps } from "../styles/WithProps";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Form = styled.form<WithProps>`
  display: grid;
  grid-template-columns: 9fr 1fr;
  align-items: center;
  padding: 2px 1rem;
  width: ${props => props.widthProps}rem;
  height: ${props => props.heightProps}rem;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 3px;
`;

const Input = styled.input`
  background-color: initial;
  border: none;
  font-size: 1rem;
`;

const SLink = styled(Link)`
  text-align: end;
`;

interface Props extends RouteComponentProps {
  widthProps?: number;
  heightProps?: number;
}

function CustomSearchInput({ history, widthProps, heightProps }: Props) {
  const [value, setValue] = useState("");

  const onChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const value = e.target.value;
    setValue(value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // alert(value);
    history.push(`/search/${value}`);
    setValue("");
  };

  return (
    <Wrapper>
      <Form
        onSubmit={onSubmit}
        widthProps={widthProps}
        heightProps={heightProps}
      >
        <Input placeholder="Search.." value={value} onChange={onChange} />
        {/* <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        > */}
        <SLink to={`/search/${value}`}>
          <SearchIcon />
        </SLink>
        {/* </IconButton> */}
      </Form>
    </Wrapper>
  );
}

export default withRouter(CustomSearchInput);
