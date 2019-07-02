const express = require('express') 
const { userById,allUsers,getUser } = require('../controllers/user')
const { requireSignin } = require('../controllers/auth')

const router = express.Router()

router.get('/users',allUsers);
router.get('/user/:userId',requireSignin,getUser);

// any route containing :uerId our app will first execute userById()
router.param("userId",userById);

module.exports = router;
