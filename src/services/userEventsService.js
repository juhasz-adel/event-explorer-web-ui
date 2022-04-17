import restClient from "axios";

const getUserEvents = (userId) =>
  restClient.get(`https://localhost:5001/api/users/${userId}/events`);

export { getUserEvents };
