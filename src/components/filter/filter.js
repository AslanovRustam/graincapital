import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useDispatch } from "react-redux";
import * as operations from "../redux/operations";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "35ch",
      justifyContent: "center",
    },
  },
}));

export default function FilterSection() {
  const classes = useStyles();
  const [filterInput, setFilterInput] = useState("");
  const dispatch = useDispatch();

  function handleSubmitForm(e) {
    e.preventDefault();
    dispatch(operations.findUser(filterInput));
    setFilterInput("");
  }
  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div>
          <form onSubmit={handleSubmitForm} className={classes.root}>
            <TextField
              id="outlined-basic"
              label="please enter userID"
              variant="outlined"
              value={filterInput}
              onChange={(e) => setFilterInput(e.currentTarget.value)}
            />

            <Button variant="contained" type="submit">
              Find
            </Button>
          </form>
        </div>
      </Container>
    </>
  );
}
