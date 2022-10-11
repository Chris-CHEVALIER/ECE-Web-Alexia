const mainRouter = require('./handles')
const express = require('express')

var app = express();

app.use(express.json())


app.use('/', mainRouter)

app.get('*', (req, res) => {
    res.send("ERROR 404 : PAGE NOT FOUND", 404)
});

app.listen(8080, () => {
    console.log('Success! Your application is running on port')
});
