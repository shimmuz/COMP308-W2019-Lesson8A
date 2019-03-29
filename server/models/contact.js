let mongoose = require('mongoose');
//mongoose.connect('mongodb://maninder:a123456@ds056288.mlab.com:56288/comp308-w2019-lesson4a');

//create a model class

let contactSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number
}, {
    collection: "first"
});


module.exports = mongoose.model('contact', contactSchema);