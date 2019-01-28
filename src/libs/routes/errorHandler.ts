export default function errorHandler(err, req, res, next) {

  const { error, message, status } = err;
  res.status.json({
    error: error || "Not Found",
    message: message || "error",
    status: status ||  404,
    timestamp: new Date()
  });
}
