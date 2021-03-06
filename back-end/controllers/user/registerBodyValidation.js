const joi = require('joi')
const _ = require('lodash')
const { errorResponse } = require('../../utils/customResponse')

const registerBodyValidation = (req, res, next) => {
  const user = req.body

  const userValidation = joi.object({
    name: joi.string().required().min(2).max(10),
    email: joi
      .string()
      .regex(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
      .required(),
    password: joi.string().required().min(3).max(10),
    profile_photo: joi.optional(), //TODO: change here...
  })
  try {
    const { error, value } = userValidation.validate(user, {
      abortEarly: false,
    })
    if (error) {
      const details = _.map(error.details, ({ message, context }) => ({
        message: message.replace(/['"]/g, ''),
        label: context.label,
      }))
      console.log(details)
      errorResponse(res, 400, 'fail', null, details)
    }
    if (!error) {
      next()
    }
  } catch (error) {
    console.log(error)
    errorResponse(res, 500, 'fail', 'Something went wrong!')
  }
}

module.exports = registerBodyValidation
