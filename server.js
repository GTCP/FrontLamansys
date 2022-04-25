const express = require('express');
const path  = require('path');
const app = express();

app.use(express.static('./dist/curso-front-end-lamansys'));

app.get('/*',(req,res) => res.sendFile('index.html', {root: 'dist/curso-front-end-lamansys-heroku/'}),
);
app.listen(process.env.PORT || 8080 );