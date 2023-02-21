const Tweet = require('../models/tweet');

class TweetRepository{
    constructor(){

    }
    async create(data){
        try {
            const tweet = await Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async get(id){
        try {
            const tweet = await Tweet.findById(id).populate({path:'comments'});
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    /*
    update tweet not required as twitter dont support this feature 
    async update(id , data){
        try {
            const tweet = await Tweet.findByIdAndUpdate(id , data , {new : true});
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
    */

    async destory(id){
        try {
            const tweet = await Tweet.findByIdAndRemove(id);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
    async getAll(offset , limit){
        try {
            const tweet = await Tweet.find().skip(offset).limit(limit);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    

}

module.exports = TweetRepository;