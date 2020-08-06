const express = require('express')
const { registerUser,loginUser,getUser } = require('../controllers/User')

const auth = require('../middleware/isAuth')

const router = express.Router()

router.route('/register/').post(registerUser)
router.route('/login/').post(loginUser)
router.route('/users/').get(auth,getUser)

module.exports = router