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


const about = require('./content/about')
const fs = require('fs');

const app = require ('express')
const router = app.Router()
const database = require('./database')




router.get('/hello/:name', (req, res)=>{
        if(req.params.name == 'Alexia')
        {

          res.send(contentAlexia)
        }
        else
        {

          res.send('Hello ' + req.params.name);
        }
      })


router.get('/hello', (req,res)=>{

      res.send('HELLO ANONYMOUS')
})

router.get('/content/:about', (req, res) =>{
  if(fs.existsSync('./content/about.json'))
  {
    res.send()
  }
})

router.get('/get', (req, res) => {

res.send(database)

})






  //question 5
  /*if (path === '/hello' && 'name' in params) {
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
  }*/



//NECESSARY IMPORTS
module.exports = router;
