const errorMiddleware = (err, req, res, next) => {
  try {
    let error = { ...err };

    error.message = err.message;

    console.error(err);

    // bad object id
    if (err.name === "CastError") {
      const message = "Resource Not Found";
      error = new Error(message);
      error.statusCode = 404;
    }

    // duplicate key
    if (err.code === 11000) {
      const message = "Duplicae field value entered";
      error = new Error(message);
      error.statusCode = 400;
    }

    // validaton error
    if (err.name === "ValidationError") {
      const message = Object.values(err.errors).map((val) => val.message);
      error = new Error(message.join(", "));
      error.statusCode = 400;
    }

    res
      .status(error.statusCode || 500)
      .json({ success: false, error: error.message || "Server Error" });
  } catch (err) {
    next(err);
  }
};

export default errorMiddleware;