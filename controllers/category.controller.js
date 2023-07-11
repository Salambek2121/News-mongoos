const Category = require('../Model/Category.model');
// const category = require('../Model/Category.model');


module.exports.categoryController = {
    createCategory: (req, res) => {
        Category.create({
            title: req.body.title
        }).then((data) => {

            res.json(data)

        });

    },

    deleteCategory: (req, res) => {
        Category.findByIdAndRemove(req.params.id).then((data) => {
            res.json(data)
        })

    },

    getOlCategory: (req, res) => {
        Category.find().then((data) => {
            res.json(data)
        })
    }


}