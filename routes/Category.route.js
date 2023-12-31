const { Router } = require('express');

const { categoryController } = require('../controllers/category.controller')

const router = Router()


router.post('/category',categoryController.createCategory)
router.delete('/category/:id',categoryController.deleteCategory)
router.get('/category', categoryController.getOlCategory)
module.exports = router