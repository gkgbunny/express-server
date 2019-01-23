export default function notFoundRoute(req, res, next) {
  console.log("welcome");
  next({
    error: "Not Found",
    message: "error",
    status: 500,
    timestamp: new Date()
  });
}
