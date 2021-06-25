const mysql = require("mysql");
var connection = mysql.createConnection({
	// Connection
	host: "localhost",
	port: 3306,
	// MySQL Workbench
	user: "sheila",
	password: "1234shack",
	// Database created in schemea.sql
	database: "company_db",
});

// connect to the mysql server and database
connection.connect(function (err) {
	if (err) throw err;
});

module.exports = connection;