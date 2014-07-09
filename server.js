// Module dependencies.
var application_root = __dirname,
    express = require( 'express' ), //Web framework
    path = require( 'path' ), //Utilities for dealing with file paths
    mongoose = require( 'mongoose' ),
    async = require( 'async' ),
    bodyParser = require('body-parser'),
    request = require('request'),
    auth = require('http-auth'),
    basic = auth.basic({
    realm: "about",
    file: __dirname + "/data/users.htpasswd"
	});

var playerSchema = new mongoose.Schema ({
	name: String,
	major: String,
	town: String,
	picture: String,
	position: String
});

var Player = mongoose.model('Player', playerSchema);

mongoose.connect('localhost');

//Create server
var app = express();
app.use('/about/add', auth.connect(basic));
app.use('/', express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());


//Start server
var port = 3000;

app.get('/about', function(req, res, err) {
	if(err) return next(err);
	res.send("authenticated!");
});

app.get('/about/players', function(req, res, next) {
	var query = Player.find();
	if (req.query.posiition) {
		query.where({ position: req.query.position });
	}
	query.exec(function(err, players) {
		if(err) return next(err);
		res.send(players);
	});
});

app.get('/about/players/:id', function(req, res) {
	Player.findById(req.params.id, function(err, player) {
		if(err) return next(err);
		res.send(player);
	});
});

app.post('/about/players', function(req, res, next) {
	var player = new Player ({
		name: req.body.playerName,
		position: req.body.playerPosition,
		major: req.body.playerMajor,
		town: req.body.playerTown,
		picture: req.body.playerPicture

	});

	return player.save( function( err ) {
		if ( !err ) {
			console.log( 'created' );
			return res.send( player );
		} else {
			console.log( err );
		}
	});

});

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.send(500, { message: err.message });
});

app.listen( port, function() {
    console.log( 'Express server listening on port %d in %s mode', port, app.settings.env );
});