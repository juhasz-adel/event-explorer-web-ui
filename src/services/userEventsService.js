import restClient from "axios";

const getUserEvents = (userId, isUpcoming) => {
  const baseUrl =
    "https://localhost:5001/api/users/${userId}/events?isUpcoming=";

  const url = isUpcoming ? `${baseUrl}true` : `${baseUrl}false`;

  return restClient.get(url);
};

export { getUserEvents };
