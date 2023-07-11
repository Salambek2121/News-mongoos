const { Router } = require('express');

const { NewsController } = require('../controllers/news.controller');


const router = Router()



router.post('/News', NewsController.createNews)
router.delete('/News/:id', NewsController.deleteNews)
router.patch('/News/:id', NewsController.patchNews)
router.get('/News/:id', NewsController.getNewsId)
router.get('/News', NewsController.getNews)
router.get('/News/..id', NewsController.getNewsCategory)




module.exports = router