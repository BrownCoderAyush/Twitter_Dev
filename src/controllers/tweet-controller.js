import TweetService from "../service/tweet-service.js";

const tweetService = new TweetService();

export const createTweet = async (req,res)=>{
    try {
        console.log(req.body);
        const response = await tweetService.create(req.body);
        return res.status(201).json({
            success : true,
            message : "Successfully created",
            err : {}
        })        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:'something went wrong',
            data:{},
            err : error
        });
    }
}