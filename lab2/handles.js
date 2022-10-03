const contentError404 =
'<!DOCTYPE html>' +
'<html>' +
'    <head>' +
'        <meta charset="utf-8" />' +
'        <title>error 404</title>' +
'    </head>' +
'    <body>' +
'       <h1>OopS!</h1>' +
'       <h2>404 PAGE NOT FOUND</h2>'+
'    </body>' +
'</html>'
const contentAlexia=
'<!DOCTYPE html>' +
'<html>' +
'    <head>' +
'        <meta charset="utf-8" />' +
'        <title>presentation of Alexia</title>' +
'    </head>' +
'    <body>' +
'       <h1>HELLO Alexia BESNARD</h1>' +
'       <h2>ING 4, gr3 SI INTER</h2>'+
'       <p>love dancing and my cat</p>'+
'    </body>' +
'</html>'

//module url
const url = require('url')
//module query
const qs = require('querystring')
//module handles.js
const about = require('./content/about')
//module fs pour la gestion des fichiers
const fs = require('fs');


const serverHandle = function (req, res) {
  // Retrieve and print the queryParams
  //question 3.7
  const route = url.parse(req.url)
  const path = route.pathname
  const params = qs.parse(route.query)
  //question 3.6
  /*const queryParams = qs.parse(url.parse(req.url).query);
  console.log(queryParams);*/

  //question 5
  if (path === '/hello' && 'name' in params) {
    if(params['name'] === 'Alexia')
    {

      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(contentAlexia);
    }
 else{
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write('Hello ' + params['name']);
    }
}
else if (path === '/about'){

  if(fs.existsSync('./content/about.json'))
  {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(about.title + "\n" + about.content + "\n" + about.author + "\n"+ about.date);
  }
  else{
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.write(contentError404);
  }

}

else {
  res.writeHead(404, {'Content-Type': 'text/html'});
  res.write(contentError404);
}
  res.end();
}

//NECESSARY IMPORTS
module.exports.func1 = serverHandle
