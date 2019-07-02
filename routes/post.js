const express = require('express') 
const {getPosts,createPost} = require('../controllers/post')
const { requireSignin } = require('../controllers/auth')
const { createPostValidator } = require('../validator/index')
const { userById } = require('../controllers/user')

const router = express.Router()

router.get('/',getPosts)
router.post('/post/new/:userId',requireSignin,createPost,createPostValidator)

// any route contaning :uerId our app will first execute userById()
router.param("userId",userById);

module.exports = router;
