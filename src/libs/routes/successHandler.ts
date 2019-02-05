export default function successHandler(message, data, status) {
  return {
    data: data || 'null',
    message: message || 'error',
    status: status || 400,
    timestamp: new Date(),
  };
}
