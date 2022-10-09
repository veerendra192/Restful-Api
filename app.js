const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
require('dotenv').config();
app.use(bodyParser.json());


// iMPORTING ROUTES USING MIDDLEWARES
const postsRoute = require('./routers/posts');

// midddle wares

app.use('/posts', postsRoute);

app.get('/', (req,res) => {
    res.send("we are on home")
});

// connection to DB
mongoose.connect(process.env.Db_Collection,{useNewUrlParser: true},() => {
    console.log("connected to mongoDB");
})

app.listen(5000, () => {
    console.log('server conneted to 5000');
});



