import LikeService from "../service/like-service.js";


const likeService = new LikeService();

export const toggleLike = async (req,res)=>{
    try {
        
        const response = await likeService.toogleLike(req.query.modelId , req.quer.modelType , req.body.user);
        return res.status(200).json({
            success : true ,
            data : response , 
            err : {} , 
            message : "Successfully toggled like"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success : false , 
            data : {} , 
            message : "Something went wrong",
            err : error
        })
    }
}
