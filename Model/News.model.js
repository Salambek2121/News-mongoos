 
const mongoose = require('mongoose');


 const newsSchema = mongoose.Schema({
heading: String,
text: String,
category: {
    type: mongoose.SchemaTypes.ObjectId,
    ref:'category'
}
 });

 const News = mongoose.model('News', newsSchema )
 module.exports = News;