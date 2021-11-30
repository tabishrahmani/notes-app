const router = require('express').Router()

const loginBodyValidation = require('../controllers/user/loginBodyValidation')
const loginController = require('../controllers/user/loginController')
const registerBodyValidation = require('../controllers/user/registerBodyValidation')
const registerUserController = require('../controllers/user/registerUserController')

router.post('/register', registerBodyValidation, registerUserController)

router.post('/login', loginBodyValidation, loginController)

module.exports = router
