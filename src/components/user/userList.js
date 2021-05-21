import React from "react";
import { useState, useEffect } from "react";
import * as operations from "../redux/operations";
import { useDispatch, useSelector } from "react-redux";
import User from "./user";
import Modal from "../modal/modal";
import ModalAdd from "../modal/modalAdd";
import s from "./user.module.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import PersonAddSharpIcon from "@material-ui/icons/PersonAddSharp";
import CssBaseline from "@material-ui/core/CssBaseline";
import CardActions from "@material-ui/core/CardActions";
import DeleteIcon from "@material-ui/icons/Delete";
import EditSharpIcon from "@material-ui/icons/EditSharp";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      justifyContent: "center",
    },
    button: {
      margin: theme.spacing(1),
    },
  },
}));

export default function UserList() {
  const classes = useStyles();
  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(operations.fetchUsers());
  }, []);

  function deleteUserById(id) {
    dispatch(operations.deleteUser(id));
  }

  const [showModal, setShowmodal] = useState(false);
  const [currentPost, setCurrentPost] = useState("");
  const [showModalAdd, setShowmodalAdd] = useState(false);

  const toggleModalAdd = (user) => {
    setShowmodalAdd(!showModalAdd);
  };

  const toggleModal = (user) => {
    setShowmodal(!showModal);
    setCurrentPost(user);
  };

  function changeBackground(user) {
    document.getElementById(`${user.id}`).style.backgroundColor = "#5fcfe8";
  }

  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <Container component="main" maxWidth="xs">
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
            startIcon={<PersonAddSharpIcon />}
            type="button"
            onClick={(e) => toggleModalAdd()}
          >
            Add
          </Button>
        </Container>
        <ul>
          {users.map((user) => (
            <li id={user.id} className={s.elementUserCard} key={user.id}>
              <User user={user} />
              <div className={s.buttonContainer}>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  startIcon={<DeleteIcon />}
                  type="button"
                  onClick={() => deleteUserById(user.id)}
                >
                  Delete
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  endIcon={<EditSharpIcon>Edit</EditSharpIcon>}
                  type="button"
                  onClick={(e) => (changeBackground(user), toggleModal(user))}
                >
                  Edit
                </Button>
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
