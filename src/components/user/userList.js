import React from "react";
import { useState, useEffect } from "react";
import * as operations from "../redux/operations";
import { useDispatch, useSelector } from "react-redux";
import User from "./user";
import Modal from "../modal/modal";
import ModalAdd from "../modal/modalAdd";
import s from "./user.module.css";

export default function UserList() {
  const users = useSelector((state) => state.users);
  console.log("users", users);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(operations.fetchUsers());
  }, []);

  function deleteUserById(id) {
    console.log("id", id);
    dispatch(operations.deleteUser(id));
  }

  const [showModal, setShowmodal] = useState(false);
  const [currentPost, setCurrentPost] = useState("");
  const [showModalAdd, setShowmodalAdd] = useState(false);

  const toggleModalAdd = (user) => {
    setShowmodalAdd(!showModalAdd);
    // setCurrentPost(user);
  };

  console.log("currentPost", currentPost);

  const toggleModal = (user) => {
    setShowmodal(!showModal);
    setCurrentPost(user);
  };

  return (
    <>
      <div>
        <button type="button" onClick={(e) => toggleModalAdd()}>
          Add
        </button>
        <ul>
          {users.map((user) => (
            <li className={s.elementPostCard} key={user.id}>
              <User user={user} />
              <div className={s.buttonContainer}>
                <button type="button" onClick={() => deleteUserById(user.id)}>
                  Delete
                </button>
                <button type="button" onClick={(e) => toggleModal(user)}>
                  Edit
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {showModal && <Modal onClose={toggleModal} user={currentPost} />}
      {showModalAdd && <ModalAdd onClose={toggleModalAdd} user={currentPost} />}
    </>
  );
}
