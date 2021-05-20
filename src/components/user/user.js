import React from "react";
import s from "./user.module.css";

export default function Post({ user }) {
  return (
    <>
      <div className={s.userCard}>
        <h2>Hello</h2>
        {/* <h2>{user.company.name}</h2>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
        <p>{user.website}</p> */}
      </div>
    </>
  );
}
