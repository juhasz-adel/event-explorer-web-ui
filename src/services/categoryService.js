import restClient from "axios";

const getCategories = () =>
  restClient.get("https://localhost:5001/api/categories");

export { getCategories };
