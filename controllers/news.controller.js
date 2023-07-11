
const News = require('../Model/News.model');




module.exports.NewsController = {
    createNews: (req, res) => {
        News.create({
            heading: req.body.heading,
            text: req.body.text,
            CategoryNews: req.body.CategoryNews
        }).then((data) => {
            res.json(data)
        });
    },

    deleteNews: (req, res) => {
        News.findByIdAndRemove(req.params.id).then((data) => {
            res.json(data)
        })
    },

    patchNews: (req, res) => {
        News.findByIdAndUpdate(req.params.id, { name: req.body.name }).then((data) => {
            res.json(data)
        })
    },


    getNewsId: (req, res) => {
        News.findById(req.params.id).then((data) => {
            res.json(data)
        })

    },

    getNews: (req,res) => {
        News.find().then((data) => {
            res.json(data)
        })
    },

    getNewsCategory:(req,res) => {
    News.find({CategoryNews: req.params.id}).then((data) => {
        res.json(data)
    })
        
    }

}