const express=require('express');
const router=express.Router();
const playlistController=require('../controllers/playlistController');
const authController=require('../controllers/authController');

router.get('/',authController.protect,playlistController.getAllPlaylist)
router.post('/create',authController.protect,playlistController.createPlaylist);

module.exports=router;