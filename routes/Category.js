const express = require('express')
const { getCategory,postCategory ,deleteCategory} = require('../controllers/Category')
const auth = require('../middleware/isAuth')
const router = express.Router()

//get and post category
router.route('/')
    .get(auth,getCategory)
    .post(auth,postCategory)

//delete route
router.route('/:id')
        .delete(auth,deleteCategory)
module.exports = router