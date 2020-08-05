const express = require('express')
const { getBooks , postBook} = require('../controllers/Book')
const router = express.Router()

router.route('/').get(getBooks).post(postBook)

module.exports = router