import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import styled from "styled-components";
import { SearchIcon } from "./Icons";
import { Link, withRouter } from "react-router-dom";
import { RouteChildrenProps, RouteComponentProps } from "react-router";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 9fr 1fr;
  align-items: center;
  border-radius: 3px;
  padding: 2px 1rem;
  width: 23rem;
  height: 3.7rem;
  background-color: rgba(0, 0, 0, 0.05);
`;

const Input = styled.input`
  background-color: initial;
  border: none;
  font-size: 1rem;
`;

const SLink = styled(Link)`
  text-align: center;
`;

function SearchInput(props: RouteComponentProps) {
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
    props.history.push(`/search/${value}`);
    setValue("");
  };

  return (
    <Wrapper>
      <Form onSubmit={onSubmit}>
        <Input placeholder="Search.." value={value} onChange={onChange} />
        <SLink to={`/search/${value}`}>
          <SearchIcon />
        </SLink>
      </Form>
    </Wrapper>
  );
}

export default withRouter(SearchInput);
