const categoryModel = require('../model/Category')

module.exports = class CategoryController {
    constructor() { }

    /** GET list users */
    static get(req, res, next) {

        categoryModel.get(function (data, err) {
            if (err != null) {
                res.send(err)
            } else {
                res.send(data);
            }
        });
    }

    /**GET list category by id */
    static getById(req, res, next) {
        let id = req.params.id;

        categoryModel.getById(function (data, err) {
            if (err != null) {
                res.send(err)
            } else {
                res.send(data);
            }
        },id);
    }

    /** POST create category */
    static create(req, res, next) {
        let newCat = req.body;

        categoryModel.create(function (data, err) {
            if (err != null) {
                res.send(err)
            } else {
                res.send(data);
            }
        },newCat);
    }

    /** POST edit category */
    static update(req, res, next) {
        let id = req.params.id;
        let updateCat = req.body;

        categoryModel.update(function (data, err) {
            if (err != null) {
                res.send(err)
            } else {
                res.send(data);
            }
        },id,updateCat);
    }

    /** DELETE delete category */
    static delete(req, res, next) {
        let id = req.params.id;

        categoryModel.delete(function (data, err) {
            if (err != null) {
                res.send(err)
            } else {
                res.send(data);
            }
        },id);
    }

}