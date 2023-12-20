const HTTP = require('http');
const FS = require('fs');
const EJS = require('ejs');

const INDEX = FS.readFileSync('./app/ejs/index.ejs', 'utf8');
const GROBAL_STYLE = FS.readFileSync('./app/styles/grobal_style.css', 'utf8');

const SERVER = HTTP.createServer(rooter);

SERVER.listen(3000);
console.log(`Server start at port 3000`);

function rooter(req, res){
    const URLS = new URL(req.url, `http://${req.headers.host}`);

    switch(URLS.pathname){

        case '/':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(EJS.render(INDEX))
            res.end();
            break;

        case '/grobal_style.css':
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.write(EJS.render(GROBAL_STYLE))
            res.end();
            break;

    }
}
