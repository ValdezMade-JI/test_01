var mysql = require('mysql');

module.exports = class mysqlConnection {
    constructor() { }

    static mysqlConnect(cbConnect) {

     var con = mysql.createConnection({
        host: "localhost",
        port: "3306",
        user: "root",
        password: "nacho212",
        database: "test_01"
      });

      con.connect(
        function (err) {
          if (err){
              cbConnect(null,err);
          }else{
              cbConnect(con,null);
            //  console.log(con.state);
          }          
        }     
      );
      
    }

}
