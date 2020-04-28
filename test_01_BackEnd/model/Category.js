const mysqlModel = require('../model/mysql-connection');

module.exports = class Category {
    constructor() { }

    /** GET list categories */
    static get(cb) {

        mysqlModel.mysqlConnect(function(con,err){            
            if (err) cb(null,err);
            else{
                con.query(`call test_01.Get_Categories();`, function(error, results, fields){
                    if (error) cb(null,error);
                    cb(results[0]);                  
                });                
            } 
            // Aqui deberia matar mi conexion
        });              
    }

    /**GET list categoty by id */
    static getById(cb,id) {

        mysqlModel.mysqlConnect(function(con,err){            
            if (err) cb(null,err);
            else{
                con.query(`call test_01.Get_CategoryById (?)`, id, function(error, results, fields){
                    if (error) cb(null,error);
                    cb(results[0]);                  
                });                
            } 
        });              
        // Aqui deberia matar mi conexion
    }

    /** POST create category */
    static create(cb,category) {

        mysqlModel.mysqlConnect(function(con,err){            
            if (err) cb(null,err);
            else{
                con.query(`call test_01.Create_Category (?)`,category.name, function(error, results, fields){
                    if (error) cb(null,error);
                    cb(results);                  
                });                
            } 
        });              
        // Aqui deberia matar mi conexion
    }

    /** POST edit category */
    static update(cb,id,category) {

        mysqlModel.mysqlConnect(function(con,err){            
            if (err) cb(null,err);
            else{
                con.query(`call test_01.Update_Category(?, ?)`,[id,category.name], function(error, results, fields){
                    if (error) cb(null,error);
                    cb(results);                  
                });                
            } 
        });              
        // Aqui deberia matar mi conexion
    }

    /** DELETE delete category */
    static delete(cb,id) {

        mysqlModel.mysqlConnect(function(con,err){            
            if (err) cb(null,err);
            else{
                con.query(`call test_01.Delete_Category (?)`, id, function(error, results, fields){
                    if (error) cb(null,error);
                    cb(results);                  
                });                
            } 
        });              
        // Aqui deberia matar mi conexion
    }
    
}