
import path = require("path");
import express = require("express");
import http = require("http");
import bodyParser = require("body-parser");

var tests:{new():any}[] = []
export function ajouterTest(type:{new():any}):void
{
    tests.push(type);
}

function trouverTest(nom:string):{new():any}
{
    for (var i=0; i<tests.length; ++i)
    {
        if (tests[i].toString().split(' ')[1] == nom)
        {
            return tests[i];
        }
    }
    return null;
}

function listeDesTests():string[]
{
    return tests.map(t => t.toString().split(' ')[1]);
}

async function lancerTest(type:{new():any})
{
    var test = new type();
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


require("../test/testAjouterArticle");
require("../test/testArticlesRecents");

// Configuration du serveur

let app = express();
let server = http.createServer(app);
var io = require('socket.io')(server);

// parse application/json
app.use(bodyParser.json())

// Fichiers


app.get('/', function(req, res){
    var file = path.join(__dirname, "..", "..", "src", "testrunner", "public", "index.html")
    res.sendFile(file);
});

// Lancer un test
app.post('/api/lancer', async function(req, res) {
    console.log(req.body);
    await lancerTest(trouverTest(req.body.nom));
});

// Liste des tests
app.get('/api/tests', function(req, res) {
    res.write(JSON.stringify(listeDesTests()));
    res.end();
});

app.use(express.static(path.join(__dirname, "..", "..", "src", "testrunner", "public")));

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
});

server.listen(4000, function(){
  console.log('listening on *:4000');
});