import restClient from "axios";

const getEvents = () => restClient.get("https://localhost:5001/api/events");

export { getEvents };
