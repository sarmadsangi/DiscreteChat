
var express = require("express"),
    http = require("http"),
    port = (process.env.PORT || 3000),
    server = module.exports = express();

server.configure(function () {

    server.use(express["static"](__dirname + "/app"));

    server.use(express.errorHandler({

        dumpExceptions:true,

        showStack:true

    }));

    server.use(express.bodyParser());

    server.use(server.router);
});

http.createServer(server).listen(port);

console.log('descreteChat Web Client Running on ' + port );