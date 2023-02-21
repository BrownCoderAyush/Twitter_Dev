const { TweetRepository } = require("../repository/index");

class TweetService {
    constructor(){
        this.tweetRepository = new TweetRepository();
    }

    async create(data){
        const content = data.content;
        let tags = content.match(/#[a-zA-Z0-9_]+/g) //this regex extracts hashtags 
        tags = tags.map((tag)=>{ return tag.substring(1)});
        const tweet = await this.tweetRepository.create(data);
        return tweet;
    }
}

module.exports = TweetService;