import React, { useState, useEffect } from "react";
import shortid, { generate } from "shortid";
import { useDispatch } from "react-redux";
import { createPortal } from "react-dom";
import * as operations from "../redux/operations";
import s from "./modal.module.css";

const modalRoot = document.querySelector("#modal-root");

export default function ModalAdd({ onClose }) {
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
    <div className={s.Modal__backdrop} onClick={handleBackdropClick}>
      <form className={s.formtStyle} onSubmit={handleSubmit}>
        <label>
          Company name
          <input value={companyName} onChange={handleChangeCompany}></input>
        </label>
        <label>
          Name
          <input value={name} onChange={handleChangeName}></input>
        </label>
        <label>
          Email
          <input value={email} onChange={handleChangeEmail}></input>
        </label>
        <label>
          Wbsite
          <input value={website} onChange={handleChangeWebsite}></input>
        </label>
        <button disabled={!validForm} type="submit">
          Add
        </button>
      </form>
    </div>,
    modalRoot
  );
}
