const mongoose = require('mongoose');

const conn = process.env.MONGODB_URI || "mongodb://localhost:27017/properties";


const configOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
}

mongoose.connect(conn, configOptions). then(()=> console.log('MongoDB successfully connected properties...'))
.catch(err => console.log(`MongoDB connection error: ${err}`));



module.exports = {
    Property: require('./Property'),
    Agent: require('./Agent'),
    User: require('./User')
}