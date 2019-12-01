import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import styled from "styled-components";
import { SearchIcon } from "./Icons";
import { Link, withRouter } from "react-router-dom";
import { RouteChildrenProps } from "react-router";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
      width: 500
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1
    },
    iconButton: {
      padding: 10
    },
    divider: {
      height: 28,
      margin: 4
    }
  })
);

function SearchInput(props: RouteChildrenProps) {
  const classes = useStyles();
  const [value, setValue] = useState("");

  const onChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const value = e.target.value;
    setValue(value);
  };

  const onSubmit = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    // alert(value);
    props.history.push(`/search/${value}`);
    setValue("");
  };

  return (
    <Wrapper>
      <Paper component="form" className={classes.root} onSubmit={onSubmit}>
        <InputBase
          className={classes.input}
          placeholder="Search.."
          value={value}
          inputProps={{ "aria-label": "search" }}
          onChange={onChange}
        />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <Link to={`/search/${value}`}>
            <SearchIcon />
          </Link>
        </IconButton>
      </Paper>
    </Wrapper>
  );
}

export default withRouter(SearchInput);
