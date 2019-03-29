let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//create reference to the contact model
let things = require('../models/favourite-things');


// GET Fav Things list page - READ
router.get('/', (req, res, next) => {

    things.find((err, favThing) => {

        if (err) {
            return console.error(err);
        } else {
            console.log(favThing);
            res.render('favThings/index', {
                title: 'Favourite Things',
                favThing: favThing
            });

        }
    })
});


module.exports = router;