import { TweetRepository, HashtagRepository } from "../repository/index.js";

class TweetService {
    constructor() {
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }

    async create(data) {
        console.log(data);
        const content = data.content;

        let tags = content.match(/#[a-zA-Z0-9_]+/g) //this regex extracts hashtags 

        //eliminate # from tags
        tags = tags.map((tag) => { return tag.substring(1).toLowerCase()}); 
        
        const tweet = await this.tweetRepository.create(data);

        //Find array of tags object already present 
        let alreadyPresentTags = await this.hashtagRepository.findByName(tags);
        let titleOfAlreadyPresentTags = alreadyPresentTags.map((tag) => tag.title);

        //New tags in hashtag collection
        let newTags = tags.filter(tag => !titleOfAlreadyPresentTags.includes(tag));

        //Creates array of news tags object 
        newTags = newTags.map(tag => {
            return {
                title: tag, tweets: [tweet.id]
            }
        })

        //Creation of newTags document in bulk
        const response = await this.hashtagRepository.bulkCreate(newTags);

        //Insert tweet id in already present tags 
        alreadyPresentTags.forEach(async tag => {
            tag.tweets.push(tweet.id);
            await tag.save();
        })

        /*
        // to filter out tags not present in db 
        const result = tags.filter((tag)=>{  
            if(alreadyPresentTags.indexOf(tag)==-1)return true;
            return false;
        });
        */

        return tweet;
    }

    async get(tweetId){
        const tweet = await this.tweetRepository.getWithCommentsInsideComments(tweetId);
        return tweet;
    }


}

export default TweetService;