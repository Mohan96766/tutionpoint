const express = require('express');
const router = express.Router();
const cntrlmain=require('../controllers/others');
const ctrllocations =require('../controllers/locations');
const ctrlUsers = require('../controllers/user');
/* GET home page. */
router.get('/',ctrllocations.tuitionCenters);
router.get('/tuition',ctrllocations.tuitionInfo);
router.get('/tuition/review/new',ctrllocations.addReview);
router.get('/about',cntrlmain.about);
// Route for the login page
router.get('/login', ctrlUsers.login_get);
//router.post('/login', ctrlUsers.login_post);

// Route for the registration 
router.get('/register', ctrlUsers.register_get);
//router.post('/register', ctrlUsers.register_post);
module.exports=router;