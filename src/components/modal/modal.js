import React, { useState, useEffect } from "react";
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

export default function Modal({ onClose, user }) {
  const classes = useStyles();
  const [companyN, setCompany] = useState(user.company.name);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [website, setwebsite] = useState(user.website);
  const [validForm, setValidForm] = useState(false);

  useEffect(() => {
    if (
      companyN.length < 1 ||
      name.length < 1 ||
      email.length < 1 ||
      website.length < 1
    ) {
      setValidForm(false);
    } else {
      setValidForm(true);
    }
  }, [companyN, name, email, website]);

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
  };

  const editPost = (e) => {
    dispatch(
      operations.editUser(
        {
          id: user.id,
          name: name,
          username: user.username,
          email,
          address: {
            street: user.address.street,
            suite: user.address.suite,
            city: user.address.city,
            zipcode: user.address.zipcode,
            geo: { lat: user.address.geo.lat, lng: user.address.geo.lng },
          },
          phone: user.phone,
          website,
          company: {
            name: companyN,
            catchPhrase: user.company.catchPhrase,
            bs: user.company.bs,
          },
        },
        user.id
      )
    );
    onClose();
  };

  return createPortal(
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <div className={s.Modal__backdrop} onClick={handleBackdropClick}>
          <form className={s.formtStyle} onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="Companyname"
              label="Company name"
              name="Companyname"
              autoFocus
              value={companyN}
              required
              onChange={handleChangeCompany}
            />
            {/* <input value={companyN} required onChange={handleChangeCompany} /> */}
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
              type="email"
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
              onClick={() => editPost()}
            >
              Edit
            </Button>
          </form>
        </div>
      </div>
    </Container>,
    modalRoot
  );
}
