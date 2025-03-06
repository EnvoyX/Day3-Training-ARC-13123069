const response = (statusCode, message, data, res) => {
  res.status(statusCode).json({
    payload: data,
    message,
    metadata: {
      prev: "",
      next: "",
      current: "",
    },
  });
};

module.exports = response;
