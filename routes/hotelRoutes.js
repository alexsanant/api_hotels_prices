const express = require('express');
const api = express.Router();
const hotelController = require('../controllers/hotelController');

//Route for hotel list
api.get("/list", hotelController.getHotels);



module.exports = api;

