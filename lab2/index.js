
// Define a string constant concatenating strings -- code html --
/*const content = '<!DOCTYPE html>' +
'<html>' +
'    <head>' +
'        <meta charset="utf-8" />' +
'        <title>ECE AST</title>' +
'    </head>' +
'    <body>' +
'       <h1>Hello World!</h1>' +
'    </body>' +
'</html>'*/
// Import a module
//module http :
const http = require('http')
//module url
//module query
//module handles.js
const handles = require ('./handles')
// Declare an http server

const server = http.createServer(handles.func1);
server.listen(8080)
