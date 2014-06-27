// Module dependencies.
var application_root = __dirname,
    express = require( 'express' ), //Web framework
    path = require( 'path' ) //Utilities for dealing with file paths
    
//Create server
var app = express();

app.configure(function() {
    app.use('/', express.static(__dirname + "/public"));
});

//Start server
var port = 3000;
app.listen( port, function() {
    console.log( 'Express server listening on port %d in %s mode', port, app.settings.env );
});