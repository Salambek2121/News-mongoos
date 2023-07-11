const moongose = require('mongoose');


const commentSchema = moongose.Schema({
    name: String,
    text: String,

    CommentNews: {
        type: moongose.SchemaTypes.ObjectId,
        ref: 'News'
    }

});

const Comment = moongose.model('Comment', commentSchema)
module.exports = Comment;