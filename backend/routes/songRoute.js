const express=require('express');
const router=express.Router();
const songController=require('../controllers/songController');


router.get('/',songController.getAllSong);
router.get('/:songId',songController.getSong);


module.exports=router;