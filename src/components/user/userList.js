import React from "react";
import { useState, useEffect } from "react";
// import * as operations from "../redux/operations";
import { useDispatch, useSelector } from "react-redux";
import User from "./user";
import s from "./user.module.css";

export default function UserList() {
  return (
    <>
      <div>
        <User />
      </div>

      {/* {showModal && <Modal onClose={toggleModal} post={currentPost} />} */}
    </>
  );
}
