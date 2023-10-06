const express = require('express');
const router = express.Router();
const cntrlmain=require('../controllers/others');
const ctrllocations =require('../controllers/locations');
/* GET home page. */
router.get('/',ctrllocations.tuitionCenters);
router.get('/tuition',ctrllocations.tuitionInfo);
router.get('/tuition/review/new',ctrllocations.addReview);
router.get('/about',cntrlmain.about);
module.exports=router;