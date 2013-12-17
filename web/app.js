
var express = require("express"),
    exphbs  = require('express3-handlebars'),
    http = require("http"),
    port = (process.env.PORT || 3000),
    app = module.exports = express();

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.engine('handlebars', exphbs({defaultLayout: 'main'}));
  app.set('view engine', 'handlebars');
  app.set('view options', {
    layout: false
  });
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.static(__dirname + '/public'));
  app.use(app.router);
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

http.createServer(app).listen(port);

console.log('descreteChat Web Client Running on ' + port );