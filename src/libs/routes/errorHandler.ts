export default function errorHandler(err, req, res, next) {
  res.status.json(err);
}
