const mongoose = require('mongoose');
const {dbUrl} = require('./config');
const connect = async ()=>{
    await mongoose.connect(dbUrl);
}

 module.exports = connect;