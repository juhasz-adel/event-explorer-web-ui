import restClient from "axios";

const getUser = (id) =>
  restClient.get(`https://localhost:5001/api/users/${id}`);

export { getUser };
