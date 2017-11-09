//connecting to mysql db

const mysql = require("mysql");


// 
// for heroku connection
var connection;

if(process.env.JAWSDB_URL){
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else{
	var connection = mysql.createConnection({
	host: "localhost",
	user:"root",
	password:"root",
	database: "burgers_db"
	});
};
connection.connect(function(err){
	if(err){
		console.log("Error" + err);
	}
	console.log("Connected as id " + connection.threadId);
});


module.exports = connection;