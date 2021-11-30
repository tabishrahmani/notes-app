const joi = require('joi')
const _ = require('lodash')
const { errorResponse } = require('../../utils/customResponse')

const loginBodyValidation = (req, res, next) => {
  const user = req.body

  const loginValidation = joi.object({
    email: joi
      .string()
      .regex(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
      .required(),
    password: joi.string().required().min(3).max(10),
  })
  try {
    const { error, value } = loginValidation.validate(user, {
      abortEarly: false,
    })
    if (error) {
      const details = _.map(error.details, ({ message, context }) => ({
        message: message.replace(/['"]/g, ''),
        label: context.label,
      }))
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

module.exports = loginBodyValidation
