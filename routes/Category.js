const express = require('express')
const { getCategory,postCategory } = require('../controllers/Category')

const router = express.Router()

router.route('/')
    .get(getCategory)
    .post(postCategory)

module.exports = router