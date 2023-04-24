import express from "express";
import { createTweet , getTweet } from  "../../controllers/tweet-controller.js";
import { toggleLike } from "../../controllers/like-controller.js";
import { createComment } from "../../controllers/comment-controller.js"
import { login, signup } from "../../controllers/auth-controller.js"
import { authenticate } from "../../middleware/authentication.js";



const router = express.Router();

router.post('/tweets' ,authenticate,  createTweet);
router.post('/like/toggle' , toggleLike);
router.post('/comment/create' , authenticate , createComment);
router.get('/tweet/:id', getTweet);
router.post('/signup', signup);
router.post('/login', login);
export default router;