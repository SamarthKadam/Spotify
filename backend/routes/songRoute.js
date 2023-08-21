const express=require('express');
const authController=require('../controllers/authController');
const router=express.Router();
const songController=require('../controllers/songController');


router.get('/',songController.getAllSong);
router.get('/AllLikedSongs',authController.protect,songController.getAllLikedSongs);
router.post('/likedSong',authController.protect,songController.likedSong);
router.get('/:songId',songController.getSong);


module.exports=router;