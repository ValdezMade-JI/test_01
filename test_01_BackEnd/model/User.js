const mysqlModel = require('../model/mysql-connection');
var mysql = require('mysql');

module.exports = class User {
    constructor() { }

    /** GET list users */
    static get(cb) {

        mysqlModel.mysqlConnect(function(con,err){           
            if (err) cb(null,err);
            else{
                con.query(`call test_01.Get_User();`, function(error, results, fields){
                    if (error) cb(null,error);
                    cb(results[0]);                  
                });                
            } 
        });       
    }

    /**GET list user by id */
    static getById(cb,id) {

        mysqlModel.mysqlConnect(function(con,err){            
            if (err) cb(null,err);
            else{
                con.query(`call test_01.Get_USerById(?);`, id, function(error, results, fields){
                    if (error) cb(null,error);
                    cb(results[0]);                  
                });                
            } 
        });              
        // Aqui deberia matar mi conexion
    }

    /** POST create user */
    static create(cb,user) {

        mysqlModel.mysqlConnect(function(con,err){            
            if (err) cb(null,err);
            else{
                con.query(`call test_01.Create_User(?, ?, ?, ?);`,
                [user.username,user.email,user.password,user.category_category_id], function(error, results, fields){
                    if (error) cb(null,error);
                    cb(results);                  
                });                
            } 
        });              
        // Aqui deberia matar mi conexion
    }

    /** POST edit user */
    static update(cb,id,user) {

        mysqlModel.mysqlConnect(function(con,err){            
            if (err) cb(null,err);
            else{
                con.query(`call test_01.Update_User(?, ?, ?, ?, ?);`,
                [id,user.username,user.email,user.password,user.category_category_id], function(error, results, fields){
                    if (error) cb(null,error);
                    cb(results);                  
                });                
            } 
        });              
        // Aqui deberia matar mi conexion
    }

    /** DELETE delete user */
    static delete(cb,id) {

        mysqlModel.mysqlConnect(function(con,err){            
            if (err) cb(null,err);
            else{
                con.query(`call test_01.Delete_User (?)`,id, function(error, results, fields){
                    if (error) cb(null,error);
                    cb(results);                  
                });                
            } 
        });              
        // Aqui deberia matar mi conexion
    }
    
}