
const app = require('express')();
const http = require('http').Server(app);
const { Server } = require('http');
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://ninhduydang2001:C5nF1pgaKfIoKULg@ecommerce.ytmlpua.mongodb.net/?retryWrites=true&w=majority&appName=ecommerce");

    {
    console.log("server is running");
    
};