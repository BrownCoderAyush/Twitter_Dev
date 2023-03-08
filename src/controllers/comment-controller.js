import CommentService from "../service/comment-service.js";


const commentService = new CommentService();

export const createComment = async (req,res)=>{
    try {
        const response = await commentService.createComment(req.query.modelId , req.query.modelType , req.user.id , req.body.content); 
        return res.status(200).json({
            success : true ,
            data : response , 
            err : {} , 
            message : "Successfully created a new comment"
        })
    } catch (error) {
        console.log(error);
        console.log('here');
        return res.status(500).json({
            success : false , 
            data : {} , 
            message : "Something went aa  wrong",
            err : error
        })
    }
}
