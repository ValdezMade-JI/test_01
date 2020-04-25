const userModel = require('../model/User')

module.exports = class UserController {
    constructor() { }

    /** GET list users */
    static get(req, res, next) {

        userModel.get(function (data, err) {
            if (err != null) {
                res.send(err)
            } else {
                res.send(data);
            }
        });
    }

    /**GET list user by id */
    static getById(req, res, next) {
        let id = req.params.id;

        userModel.getById(function (data, err) {
            if (err != null) {
                res.send(err)
            } else {
                res.send(data);
            }
        },id);
    }

    /** POST create user */
    static create(req, res, next) {
        let newUser = req.body;

        userModel.create(function (data, err) {
            if (err != null) {
                res.send(err)
            } else {
                res.send(data);
            }
        },newUser);
    }

    /** POST edit user */
    static update(req, res, next) {
        let id = req.params.id;
        let updateUser = req.body;

        userModel.update(function (data, err) {
            if (err != null) {
                res.send(err)
            } else {
                res.send(data);
            }
        },id,updateUser);
    }

    /** DELETE delete user */
    static delete(req, res, next) {
        let id = req.params.id;

        userModel.delete(function (data, err) {
            if (err != null) {
                res.send(err)
            } else {
                res.send(data);
            }
        },id);
    }

}