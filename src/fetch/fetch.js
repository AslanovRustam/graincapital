const BASE_URL = "https://jsonplaceholder.typicode.com";

const fetchAllUsers = () => {
  return fetch(`${BASE_URL}/users`).then((response) => {
    return response.json();
  });
};

const addUser = (post) => {
  return fetch(`${BASE_URL}/users`, {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => {
    return response.json();
  });
};

const updUser = (update, id) => {
  return fetch(`${BASE_URL}/users/${id}`, {
    method: "PATCH",
    body: JSON.stringify(update),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => {
    return response.json();
  });
};

const fetchdeleteUser = (id) => {
  return fetch(`${BASE_URL}/users/${id}`, {
    method: "DELETE",
  }).then((response) => {
    return response.json();
  });
};

const filterUser = (id) => {
  return fetch(`${BASE_URL}/users?id=${id}`).then((response) => {
    return response.json();
  });
};

export { filterUser, fetchAllUsers, addUser, updUser, fetchdeleteUser };
