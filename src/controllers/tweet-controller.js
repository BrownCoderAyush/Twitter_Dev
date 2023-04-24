import TweetService from "../service/tweet-service.js";

const tweetService = new TweetService();
import upload from "../config/File-Upload-S3-config.js";
const singleUploader = upload.single('image');

export const createTweet = async (req,res)=>{
    try {
        singleUploader(req,res,async(err,data)=>{
            if(err){
                res.status(500).json({error : err});
            }
            const payload = req.body ; 
            payload.image = req.file.location ;
            const response = await tweetService.create(payload);
            return res.status(201).json({
                success : true,
                message : "Successfully created",
                data : response , 
                err : {}
            })        

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

export const getTweet = async (req,res)=>{
    try {
        const response = await tweetService.get(req.params.id);
        return res.status(201).json({
            success : true,
            message : "Successfully fetched",
            data : response , 
            err : {}
        })        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:'something went wrong while fetching',
            data:{},
            err : error
        });
    }
}