import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import styled from "styled-components";
import { SearchIcon } from "./Icons";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const useStyles = makeStyles(theme => ({
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
}));

function Input() {
  const classes = useStyles();
  const onChange = e => {
    return console.log(e.target.value);
  };
  return (
    <Wrapper>
      <Paper component="form" className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Search.."
          inputProps={{ "aria-label": "search" }}
          onChange={onChange}
        />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <Link to="search">
            <SearchIcon />
          </Link>
        </IconButton>
      </Paper>
    </Wrapper>
  );
}

export default Input;
