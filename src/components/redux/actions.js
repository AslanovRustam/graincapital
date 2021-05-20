import { createAction } from "@reduxjs/toolkit";

const fetchUserRequest = createAction("fetchUserRequest");
const fetchUserSuccess = createAction("fetchUserSuccess");
const fetchUserError = createAction("fetchUserError");

const deleteUserRequest = createAction("deleteUserRequest");
const deleteUserSuccess = createAction("deleteUserSuccess");
const deleteUserError = createAction("deleteUserError");

const addUserRequest = createAction("addUserRequest");
const addUserSuccess = createAction("addUserSuccess");
const addUserError = createAction("addUserError");

const updUserRequest = createAction("updUserRequest");
const updUserSuccess = createAction("updUserSuccess");
const updUserError = createAction("updUserError");

const filterRequest = createAction("filterRequest");
const filterSuccess = createAction("filterSuccess");
const filterError = createAction("filterError");

export default {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserError,
  deleteUserRequest,
  deleteUserSuccess,
  deleteUserError,
  addUserRequest,
  addUserSuccess,
  addUserError,
  updUserRequest,
  updUserSuccess,
  updUserError,
  filterRequest,
  filterSuccess,
  filterError,
};
