import express from 'express';
import {connect} from './config/database.js'; 
import TweetService from './service/tweet-service.js';
import apiroutes from './routes/index.js';
import bodyParser from 'body-parser';
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
    


})