const { Router } = require('express');


const { commentController } = require('../controllers/comment.controller');


const router = Router()


router.post('/Comment/:id', commentController.createCommentNews)
router.delete('/Comment/:id',commentController.deleteComment)
router.get('/Comment/:id', commentController.getCommentId)




module.exports = router