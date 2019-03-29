let express = require('express');
let router = express.Router();

let jwt = require('jsonwebtoken');

let passport = require('passport');

let contactController = require('../controllers/contact');

function requireAuth(req, res, next) {
    // check if user is logged in
    if (!req.isAuthenticated()) {
        return res.redirect('/login');
    }
    next();
}

// GET Contacts list page - READ
router.get('/', contactController.displayContactList);


//GET route for ADD page.... this will display the add page
router.get('/add', contactController.displayAddPage);

//POST route for processing the ADD PAge
router.post('/add', contactController.processAddPage);

//GET request - display the edit page

router.get('/edit/:id', contactController.displayEditPage);

//POST request to update the database with data from edit page
router.post('/edit/:id', contactController.processEditPage);

//GET request to perform the delete action  
router.get('/delete/:id', contactController.deletePage);

module.exports = router;