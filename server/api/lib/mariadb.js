var mysql = require('mysql');
var pool=mysql.createPool({    
    host: 'my-mariadb-host',
    user: 'userid',
    password: 'password',
    database: 'databasename'      
});

pool.on('connection', function(connection) {
    console.log('Connected to My Mariadb: BN');
});

pool.on('enqueue', function () {
    console.log('Waiting for available connection slot');
});

exports.getConnection = function(callback) {
    // The poll doesn't even make a connection to the database 
    // until a pool.getConnection() call, so that would be the 
    // earliest point to know.
    pool.getConnection(function(err, connection) {
        callback(err, connection);
    });
};
