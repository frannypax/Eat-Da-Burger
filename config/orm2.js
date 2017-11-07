var connection = require('../config/connection.js');

var orm = {
    selectAll: function(tableInput, cb) {
       var queryString = "SELECT * FROM burgers_table?? WHERE ?? = ?"
    },
  
    addBurger: function(tableInput, burger_name, cb) {
        
    },
    deleteBurger: function(tableInput, burger_name, cb) {
        
    },
    eatBurger: function(tableInput, burger_name, cb) {
        
    },
    
};

module.exports = orm;
