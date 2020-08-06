const express = require('express')
const { getBooks , postBook , deleteBook} = require('../controllers/Book')
const auth = require('../middleware/isAuth')
const admin = require('../middleware/isAdmin')
const router = express.Router()

router.route('/').get(auth,getBooks).post(auth,postBook)
router.route('/:id').delete(auth,deleteBook)

module.exports = router