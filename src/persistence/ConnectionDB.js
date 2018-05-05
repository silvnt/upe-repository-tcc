var mysql = require('mysql');
var mySqlConn = null; 

(() => {
    
    mySqlConn = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "1234",
        database: "tcc"
    }); 

})()

module.exports = mySqlConn;



