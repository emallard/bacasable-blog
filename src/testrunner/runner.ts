
import {TestAjouterArticle} from '../test/testAjouterArticle';

import path = require("path");
import express = require("express");
import http = require("http");
import bodyParser = require("body-parser");


async function lancerTest()
{
    var test = new TestAjouterArticle();
    var bac = test.bacasable;
    bac.logSuivre = (url:string) => 
    {
        console.log('navigateur vers : ' + url);
        io.emit('chat message', 'navigateur vers : ' + url);
    };
    bac.logPage = (page:any) => 
    {
        console.log('navigateur a changé de page : ' + page.constructor.name);
        io.emit('chat message', 'navigateur a changé de page : ' + page.constructor.name);
    }

    bac.logAppel = (url, parameters) => 
    {
        console.log('appel vers : ' + url + ' , post : ' + JSON.stringify(parameters));
        io.emit('chat message', 'appel vers : ' + url + ' , post : ' + JSON.stringify(parameters));
    }

    bac.logReponse = (reponse, url, parameters) => 
    {
        console.log('reponse : ' + JSON.stringify(reponse));
        io.emit('chat message', 'réponse : ' + JSON.stringify(reponse));
    }
    await test.test();
}

// Configuration du serveur

let app = express();
let server = http.createServer(app);
var io = require('socket.io')(server);

// Post data
app.use(bodyParser.urlencoded({
    extended: true
}));

// Fichiers
app.use(express.static(path.join(__dirname, "..", "..", "src", "testrunner", "public")));
app.get('/', function(req, res){
    var file = path.join(__dirname, "..", "..", "src", "testrunner", "public", "index.html")
    res.sendFile(file);
});

// Lancer un test
app.post('/lancer', function(req, res) {
    console.log(req.body);
    lancerTest();
});

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
});

server.listen(4000, function(){
  console.log('listening on *:4000');
});