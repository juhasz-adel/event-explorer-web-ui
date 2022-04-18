import restClient from "axios";

const getCategoryEvents = (categoryId) =>
  restClient.get(`https://localhost:5001/api/categories/${categoryId}/events`);

export { getCategoryEvents };
