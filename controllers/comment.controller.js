const Comment = require('../Model/Comment.model');


module.exports.commentController = {
    createCommentNews: (req, res) => {
        Comment.create({

            name: req.body.name,
            text: req.body.text,
            CommentNews: req.params.id

        }).then((data) => {
            res.json(data)
        });
    },
    deleteComment: (req,res) => {
        Comment.findByIdAndRemove(req.params.id).then((data) =>{
            res.json(data)
        })
    },



    getCommentId: (req,res) => {
        Comment.findById(req.params.id).then((data) => {

            res.json(data)
        })

    }
}