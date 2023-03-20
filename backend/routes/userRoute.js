const express=require('express');
const authController=require('../controllers/authController');
const router=express.Router();

router.post('/signup',authController.signup);
router.post('/login',authController.login);
router.post('/protect',authController.protect,authController.send);
router.get('/getUser',authController.getCurrentUser);


module.exports=router;     