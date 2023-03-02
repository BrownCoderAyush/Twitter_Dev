import { TweetRepository, LikeRepository } from "../repository/index.js";
class LikeService {
    constructor() {

        this.likeRepository = new LikeRepository();
        this.tweetRepository = new TweetRepository();
    }
    /*
    Check weather like to corresponding modelId , modelType , userId exists
    if -> delete like
    else -> create like
    */
    async toogleLike(modelId, modelType, userId) {
        /*
        if model type -> 'Tweet'
        */
        if (modelType == 'Tweet') {
            var likeable = await this.tweetRepository.getWithLikes(modelId);


        }
        /*
        if model type -> 'Comment'
        */
        else if (modelType == 'Comment') {
            // todo
        } else {
            throw new Error('unknown model type');
        }
        const exists = await this.likeRepository.findByUserAndLikeable({
            user: userId,
            onModel: modelType,
            likeable: modelId
        });
        if (exists) {
            /*
            pull() used to extract and remove the element from array using Id
            */

            likeable.likes.pull(exists.id);
            await likeable.save();
            await exists.remove();
            var isAdded = false;
        } else {

            const newLike = await this.likeRepository.create({
                user: userId,
                onModel: modelType,
                likeable: modelId
            });
            /*Save the new tweet after updating it with pushed like*/

            likeable.likes.push(newLike);
            await likeable.save();
            console.log(likeable);
            var isAdded = true;
        }

        return isAdded;

    }

}

export default LikeService;