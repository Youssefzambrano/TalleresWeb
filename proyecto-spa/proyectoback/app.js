require("dotenv").config()

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const port = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api',require('./routes/routes'));

mongoose.connect(process.env.URI_DB)
    .then(()=>{console.log("se ha establecido la conexion con la base de datos")})
    .catch(err => console.error(err));

app.listen(port, ()=>{
    console.log(`servidor escuchando a traves de http://127.0.0.1:${port}`);
})
