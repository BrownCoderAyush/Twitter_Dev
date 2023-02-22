const express = require('express');
const connect = require('./config/database');
// const Tweet = require('./models/tweet');
const TweetRepository = require('./repository/tweet-repository');
const HashtagRepository = require('./repository/hashtag-repository');
const CommentModel = require('./models/comment');
const hashtagModel = require('./models/hashtags');
const tweetModel = require('./models/tweet');
const TweetService = require('./service/tweet-service');
const tweetService = new TweetService();
const hashtagrepo = new HashtagRepository();
const app = express();

app.listen(3000 , async()=>{
    console.log('server started');
    await connect();
    console.log('Mongo Db connected');
    
    const response=await  tweetService.create({content:"hello ayush #life "});

})