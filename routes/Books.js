const express = require('express')
const { getBooks , postBook , deleteBook} = require('../controllers/Book')
const router = express.Router()

router.route('/').get(getBooks).post(postBook)
router.route('/:id').delete(deleteBook)

module.exports = router