const mongoose = require('mongoose');

const connection = mongoose.createConnection('mongodb://127.0.0.1:27017/ToDo').on('open', () => {
    console.log("MongoDb Connected") }).on('error',(err => {
        console.log(err);
    }));

module.exports = connection;