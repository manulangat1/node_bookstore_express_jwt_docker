const express = require('express')
const { getCategory,postCategory ,deleteCategory} = require('../controllers/Category')

const router = express.Router()

//get and post category
router.route('/')
    .get(getCategory)
    .post(postCategory)

//delete route
router.route('/:id')
        .delete(deleteCategory)
module.exports = router