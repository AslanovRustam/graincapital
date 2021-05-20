import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPortal } from "react-dom";
import * as operations from "../redux/operations";
import s from "./modal.module.css";

const modalRoot = document.querySelector("#modal-root");

export default function Modal({ onClose, user }) {
  const [companyN, setCompany] = useState(user.company.name);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [website, setwebsite] = useState(user.website);

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
    console.log();
  };

  //   const editPost = (e) => {
  //     dispatch(operations.editUser({ name, email, website }, user.id));
  //     onClose();
  //     };
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
    <div className={s.Modal__backdrop} onClick={handleBackdropClick}>
      <form className={s.formtStyle} onSubmit={handleSubmit}>
        <label>
          Company name
          <input value={companyN} onChange={handleChangeCompany}></input>
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
        <button type="submit" onClick={() => editPost()}>
          Edit
        </button>
      </form>
    </div>,
    modalRoot
  );
}
