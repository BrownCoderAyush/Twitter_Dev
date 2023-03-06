import Tweet from '../models/tweet.js';
import CrudRepository from './crud-repository.js';
class TweetRepository extends CrudRepository {
    constructor() {
        super(Tweet);
    }
    
    async create(data) {
        try {
            const tweet = await Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async getWithLikes(id) {
        try {
            const tweet = await Tweet.findById(id).populate({ path: 'likes' });

            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
    async getWithCommentsInsideComments(id) {
        try {
            const tweet = await Tweet.findById(id).populate(
                { path: 'comments'
                ,
                  populate : {
                    path : 'comments',
                    model : 'Comment'
                  }  
                });
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


    async getAll(offset, limit) {
        try {
            const tweet = await Tweet.find().skip(offset).limit(limit);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }



}

export default TweetRepository;