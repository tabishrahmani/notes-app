const errorResponse = (res, statusCode, status, message, error) => {
  res.status(statusCode).json({
    status,
    message,
    error,
  })
}
const successResponse = (res, statusCode, status, message, data) => {
  res.status(statusCode).json({
    status,
    message,
    data,
  })
}
module.exports = { errorResponse, successResponse }
