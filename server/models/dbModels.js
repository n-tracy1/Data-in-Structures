const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://dbUser:dbUser@dsvisualizer.hbjjh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'DSVisualizer'
})
    .then(() => console.log('Connected to Mongo DB.'))
    .catch(err => console.log(err));

const Schema = mongoose.Schema;

//Figure out the structure of the schema
//one schema for each data structure?
