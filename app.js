var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cons = require('consolidate'),
    dust = require('dustjs-helpers'),
    pg = require('pg'),
    app = express();

//DB connect string
var connect = {
  user: 'svartingknas', //env var: PGUSER
  database: 'recipebookdb', //env var: PGDATABASE
  password: 'Bl160575352', //env var: PGPASSWORD
  host: 'localhost', // Server hosting the postgres database
  port: 5432, //env var: PGPORT
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
};
//assign dust engine to .dust files
app.engine ('dust', cons.dust);

//set default ext .dust
app.set('view engine ', 'dust');
app.set('views', __dirname + '/views');

// set public folder
app.use(express.static(path.join(__dirname, 'public')));

// body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req,res){
  res.render('index');
})
// server
app.listen(3000, function (){
  console.log('Server started on port 3000');
});
