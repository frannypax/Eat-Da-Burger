
//importing connections 
var connection = require('./connection.js');

var orm = {
    selectAll: function(tableInput, cb) { //cb represents callback
        var queryString = 'SELECT * FROM ' + tableInput + ';';
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            //console.log(result);
            cb(result);
        });
    },
    addBurger: function(tableInput, burger_name, cb) {
        var queryString = "INSERT INTO " + tableInput + "(burger_name, devoured) VALUES ('" + burger_name + "', false );";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    eatBurger: function(tableInput, burger_name, cb) {
        var queryString = "UPDATE " + tableInput + " SET devoured = 1 WHERE burger_name = '" + burger_name + "';";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    deleteBurger: function(tableInput, burger_name, cb) {
        var queryString = "DELETE FROM " + tableInput + " WHERE burger_name = '" + burger_name + "';";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
   
};

module.exports = orm;
