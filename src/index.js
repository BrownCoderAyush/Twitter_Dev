const express = require('express');
const connect = require('./config/database');
// const Tweet = require('./models/tweet');
const TweetRepository = require('./repository/tweet-repository');
const CommentModel = require('./models/comment');
const app = express();

app.listen(3000 , async()=>{
    console.log('server started');
    await connect();
    console.log('Mongo Db connected');
    const tweetRepository = new TweetRepository();
    // const comment = await CommentModel.create({content : " my first comment"});
    // const tweet = await tweetRepository.create({content :"new latest "});
    // console.log(tweet);
    // tweet.comments.push(comment);
    // tweet.save();
    const tweet = await tweetRepository.getAll(0 , 4);

    console.log(tweet[0].contentWithEmail);
})