const mysql = require('mysql');
const config = require('../config');

module.exports = class mysqlConnection {
  constructor() { }

  static mysqlConnect(cbConnect) {
    const con = mysql.createConnection(config.sqlConfig);

    con.connect(
      function (err) {
        if (err) {
          cbConnect(null, err);
        } else {
          cbConnect(con, null);
          //  console.log(con.state);
        }
      }
    );

  }

}
