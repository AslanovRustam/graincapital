import React, { useState, useEffect } from "react";
import shortid from "shortid";
import { useDispatch } from "react-redux";
import { createPortal } from "react-dom";
import * as operations from "../redux/operations";
import s from "./modal.module.css";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import SaveIcon from "@material-ui/icons/Save";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const modalRoot = document.querySelector("#modal-root");

export default function ModalAdd({ onClose }) {
  const classes = useStyles();
  const id = shortid.generate();
  const [companyName, setCompany] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setwebsite] = useState("");
  const [validForm, setValidForm] = useState(false);

  useEffect(() => {
    if (
      companyName.length < 1 ||
      name.length < 1 ||
      email.length < 1 ||
      website.length < 1
    ) {
      setValidForm(false);
    } else {
      setValidForm(true);
    }
  }, [companyName, name, email, website]);

  const dispatch = useDispatch();

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  const handleChangeCompany = (e) => {
    setCompany(e.currentTarget.value);
  };

  const handleChangeName = (e) => {
    setName(e.currentTarget.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.currentTarget.value);
  };

  const handleChangeWebsite = (e) => {
    setwebsite(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      operations.createUser({
        id,
        name,
        username: "",
        email,
        address: {
          street: "",
          suite: "",
          city: "",
          zipcode: "",
          geo: { lat: "", lng: "" },
        },
        phone: "",
        website,
        company: { name: companyName, catchPhrase: "", bs: "" },
      })
    );
    setCompany("");
    setEmail("");
    setName("");
    setwebsite("");
    onClose();
  };

  return createPortal(
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <div className={s.Modal__backdrop} onClick={handleBackdropClick}>
          <form className={s.formtStyle} onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="Companyname"
              label="Company name"
              name="Companyname"
              autoFocus
              value={companyName}
              onChange={handleChangeCompany}
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              value={name}
              onChange={handleChangeName}
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              onChange={handleChangeEmail}
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="website"
              label="Website"
              name="website"
              value={website}
              onChange={handleChangeWebsite}
            />

            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.button}
              startIcon={<SaveIcon />}
              disabled={!validForm}
              type="submit"
            >
              Save
            </Button>
          </form>
        </div>
      </div>
    </Container>,
    modalRoot
  );
}
