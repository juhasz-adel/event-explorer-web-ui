import restClient from "axios";

const attend = (userId, eventId) =>
  restClient.post("https://localhost:5001/api/attendances", {
    userId,
    eventId,
  });

export { attend };
