const express = require('express');
const connect = require('./config/database');
// const Tweet = require('./models/tweet');
const TweetRepository = require('./repository/tweet-repository');
const CommentModel = require('./models/comment');
const TweetService = require('./service/tweet-service');
const tweetService = new TweetService();
const app = express();

app.listen(3000 , async()=>{
    console.log('server started');
    await connect();
    console.log('Mongo Db connected');
    /*
    tweetService.create({content:"hello babes #ayush #bunty"});
    */
})