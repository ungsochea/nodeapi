const express = require('express') 
const {getPosts,createPost,postsByUser} = require('../controllers/post')
const { requireSignin } = require('../controllers/auth')
const { createPostValidator } = require('../validator/index')
const { userById } = require('../controllers/user')

const router = express.Router()

router.get('/',getPosts);
router.post('/post/new/:userId',requireSignin,createPost,createPostValidator);
router.get('/posts/by/:userId',requireSignin,postsByUser);

// any route contaning :uerId our app will first execute userById()
router.param("userId",userById);

module.exports = router;
