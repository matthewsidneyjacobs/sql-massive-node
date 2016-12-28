var massive = require('massive');
var express = require('express');

var port = 3005;

var express = express();

var connectionString = "postgres://postgres:postgres@localhost/sandbox";

var app = module.exports = express();


var massiveInstance = massive.connectSync({connectionString : connectionString});
app.set('db', massiveInstance);

var db = app.get('db');






app.listen(port, function() {
  console.log('listening on port: '+port);
})
