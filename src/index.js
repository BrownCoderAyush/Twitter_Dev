import express from 'express';
import {connect} from './config/database.js'; 
import apiroutes from './routes/index.js';
import bodyParser from 'body-parser';
import {UserRepository , LikeRepository , TweetRepository} from './repository/index.js';
import likeService from './service/like-service.js';
import TweetService from './service/tweet-service.js';
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api' , apiroutes); 



 
app.listen(3000 , async()=>{
    console.log('server started');
    console.log("hello world");
    await connect();
    console.log('Mongo Db connected');
    // const tweetService = new TweetService();
    // await tweetService.create({content:"lovely day #G8 #nostalgiC"})
    // const userRepo = new UserRepository();
    const likeSev = new likeService();
    const tweet = new TweetRepository();
    // const user = await userRepo.create({
    //     email : 'ayushchopra0@gmail.com',
    //     password : '123456',
    //     name : 'Ayush'
    // });
    // const like = await likeRepo.create({
    //     onModel:'Tweet',
    //     likeable:'64003cb570f8f1e2b98ba5dd',
    //     user : '6400eec1ded4a0081d2273cc'
    // })
    // console.log(like)
    const res = await likeSev.toogleLike('6400fa768ada8e7e5868145a','Tweet','6400eec1ded4a0081d2273cc');
    // 



    console.log(res);
    // console.log(await tweet.getWithLikes('64003cb570f8f1e2b98ba5dd').likes);
// 
    


})