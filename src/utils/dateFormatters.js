const convertToDateOnly = (date) => {
  return date.toString().substring(0, 10);
};

const convertToReadableDateAndTime = (date) => {
  return date.toString().replace("T", " ");
};

export { convertToDateOnly, convertToReadableDateAndTime };
