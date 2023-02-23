import Hashtag from "../models/hashtags.js";

class HashtagRepository{
    constructor(){

    }
    async create(data){
        try {
            const tag = await Hashtag.create(data);
            return tag;
        } catch (error) {
            console.log(error);
        }
    }

    async get(id){
        try {
            const tag = await Hashtag.findById(id);
            return tag;
        } catch (error) {
            console.log(error);
        }
    }

    async bulkCreate(data){
        try {
            const tags = await Hashtag.insertMany(data);
            return tags;
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
            const response = await Hashtag.findByIdAndRemove(id);
            return response ;
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

    async findByName(titleList){
        try {
            const tags = await Hashtag.find({
                title : titleList
            });
            return tags;
        } catch (error) {
            console.log(error);
        }
    }
    

}

export default HashtagRepository;