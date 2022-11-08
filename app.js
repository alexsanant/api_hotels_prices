const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


//import module hotel routes
const hotelRoutes = require('./routes/hotelRoutes');

//create start point for the route hotels
app.use('/hotels', hotelRoutes);

//export app
module.exports = app;

