import express from 'express';
import {connect} from './config/database.js'; 
import apiroutes from './routes/index.js';
import bodyParser from 'body-parser';
import passport from 'passport';
import { passportAuth } from './config/jwt-middleware.js';
import {UserRepository , LikeRepository , TweetRepository} from './repository/index.js';
import likeService from './service/like-service.js';
import TweetService from './service/tweet-service.js';
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(passport.initialize());
passportAuth(passport);

app.use('/api' , apiroutes); 



 
app.listen(3000 , async()=>{
    console.log('server started');    
    await connect();
    console.log('Mongo Db connected');
})