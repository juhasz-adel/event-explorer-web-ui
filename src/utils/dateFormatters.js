const convertToReadableDateAndTime = (date) => {
  return date.toString().replace("T", " ");
};

export { convertToReadableDateAndTime };
