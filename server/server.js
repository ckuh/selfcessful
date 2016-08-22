var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(cors());

app.set('port',  process.env.PORT || 1337);

app.use(express.static('./client'));

app.listen(app.get('port'), function() {
  console.log('Listening to express server: ', app.get('port'));
})
