const mongoose = require('mongoose');


require("dotenv").config();
const conn = "mongodb+srv://Keyahna:rainbows77@cluster0.6c08h.mongodb.net/properties?retryWrites=true&w=majority"
// process.env.MONGODB_URI || "mongodb://localhost:27017/properties";


const configOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
}

mongoose.connect(conn, configOptions). then(()=> console.log('MongoDB successfully connected...'))
.catch(err => console.log(`MongoDB connection error: ${err}`));



module.exports = {
    Property: require('./Property'),
    Agent: require('./Agent'),
    User: require('./User')
}