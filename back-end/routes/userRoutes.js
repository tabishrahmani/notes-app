const router = require('express').Router()

const loginBodyValidation = require('../controllers/user/loginBodyValidation')
const loginController = require('../controllers/user/loginController')
const registerBodyValidation = require('../controllers/user/registerBodyValidation')
const registerController = require('../controllers/user/registerController')

router.post('/register', registerBodyValidation, registerController)

router.post('/login', loginBodyValidation, loginController)

module.exports = router
