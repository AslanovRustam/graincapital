import {
  fetchAllUsers,
  addUser,
  updUser,
  fetchdeleteUser,
  filterUser,
} from "../../fetch/fetch";
import actions from "./actions";

export const fetchUsers = () => async (dispatch) => {
  dispatch(actions.fetchUserRequest());
  try {
    const users = await fetchAllUsers();
    dispatch(actions.fetchUserSuccess(users));
  } catch (error) {
    dispatch(actions.fetchUserError(error));
  }
};

export const deleteUser = (id) => async (dispatch) => {
  dispatch(actions.deleteUserRequest());
  try {
    await fetchdeleteUser(id);
    dispatch(actions.deleteUserSuccess(id));
  } catch (error) {
    dispatch(actions.deleteUserError(error));
  }
};

export const createUser = (user) => async (dispatch) => {
  dispatch(actions.addUserRequest());
  try {
    const newUser = await addUser(user);
    dispatch(actions.addUserSuccess(newUser));
  } catch (error) {
    dispatch(actions.addUserError(error));
  }
};

export const editUser = (user, id) => async (dispatch) => {
  dispatch(actions.updUserRequest());
  try {
    const newUser = await updUser(user, id);
    dispatch(actions.updUserSuccess(newUser));
  } catch (error) {
    dispatch(actions.updUserError(error));
  }
};

export const findUser = (id) => async (dispatch) => {
  dispatch(actions.filterRequest());
  try {
    const newId = await filterUser(id);
    dispatch(actions.filterSuccess(newId));
  } catch (error) {
    dispatch(actions.filterError(error));
  }
};
