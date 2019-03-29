let mongoose = require('mongoose');
mongoose.connect('mongodb://verka:a123456@ds044989.mlab.com:44989/maninder');
//module.exports = exports = mongoose;

//create a model class

let thingsSchema = mongoose.Schema({
    name: String,
    desc: String
}, {
    collection: "favourite-things"
});


module.exports = mongoose.model('classWork', thingsSchema);