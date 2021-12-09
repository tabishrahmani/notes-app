const user = require('../../models/userModel')

const asyncHandler = require('../../utils/asyncHandler')
const { errorResponse, successResponse } = require('../../utils/customResponse')
const CustomError = require('../../utils/customError')
const generateToken = require('../../utils/generateToken')

const registerUserController = asyncHandler(async (req, res, next) => {
  let requestBody = req.body
  let { name, email, profile_photo } = requestBody
  const userExists = await user.findOne({ email })
  if (userExists) {
    const error = new CustomError('User already exists!', 403)
    return errorResponse(res, error.statusCode, 'fail', error.message)
  }
  // console.log(requestBody)
  const newUser = await user.create(requestBody)
  if (newUser) {
    const data = {
      name,
      email,
      profile_photo,
    }
    return successResponse(
      res,
      201,
      'success',
      'User registered successfully!',
      data
    )
  } else {
    throw new CustomError('Something went wrong!', 500)
  }
})

module.exports = registerUserController
