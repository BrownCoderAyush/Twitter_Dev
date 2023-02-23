import express from 'express';

import {connect} from './config/database.js'; 
import TweetService from './service/tweet-service.js';
// const Tweet = require('./models/tweet');

const app = express();

app.listen(3000 , async()=>{
    console.log('server started');
    await connect();
    console.log('Mongo Db connected');
    const tweetService = new TweetService();
    await tweetService.create({content:"lovely day #G8 #DonE"})
    

})