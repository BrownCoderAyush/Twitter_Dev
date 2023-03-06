import CommentRepository from "../repository/comment-repository.js";
import TweetRepository from "../repository/tweet-repository.js";
class CommentService {
    constructor(){
        this.commentRepository = new CommentRepository();
        this.tweetRepository = new TweetRepository();
    }
    async createComment(modelId , modelType , userId , content){
   
        try {
            if(modelType=='Tweet'){

                var commentable = await this.tweetRepository.get(modelId);
            }else if(modelType == 'Comment'){
                
                var commentable = await this.commentRepository.get(modelId);
            }else{
                throw new Error('unknown model type');
            }
            const comment = await this.commentRepository.create({
                content : content ,
                user : userId , 
                onModel : modelType , 
                commentable : modelId ,
                comments : []
            });
            commentable.comments.push(comment);
            await commentable.save();
           
            return comment;
        } catch (error) {
            
            throw error;
        }
    }
}

export default CommentService;