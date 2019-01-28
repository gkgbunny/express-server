export default function successHandler(message, data, status) {
  return {
    message: message || "error",
    status: status || 400,
    data: data || "null",
    timestamp: new Date()
  };
}
