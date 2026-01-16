const express = require('express');
require('dotenv').config()

const app = express();
app.use(express.json());


const port = process.env.PORT

//Rutas
app.use('/', require('./app.route'));



app.listen(port, () => console.log(`Server listen on port ${port}`))

