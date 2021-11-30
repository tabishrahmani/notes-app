const user = require('../../models/userModel')

const asyncHandler = require('../../utils/asyncHandler')
const { errorResponse, successResponse } = require('../../utils/customResponse')
const CustomError = require('../../utils/customError')
const generateToken = require('../../utils/generateToken')

const loginController = asyncHandler(async (req, res, next) => {
  let requestBody = req.body
  let { email } = requestBody
  let password = requestBody.password
  const userExists = await user.findOne({ email })
  if (!userExists) {
    const error = new CustomError('User not found!', 404)
    return errorResponse(res, error.statusCode, 'fail', error.message)
  }
  let password_check = await userExists.matchPassword(password)
  console.log(password_check)
  if (password_check) {
    console.log('checking...')
    const data = {
      email,
      token: generateToken(userExists._id),
    }
    return successResponse(
      res,
      201,
      'success',
      'User logged in successfully!',
      data
    )
  } else {
    return errorResponse(res, 401, 'fail', 'Incorrect password')
  }
})

module.exports = loginController
