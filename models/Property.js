const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;


const PropertySchema = new Schema ({
    title: { type: String, required: [true, "Please provide a descriptive title for property"] },
    address: { type: String, required: true},
    price: {type: Currency},
    beds: {type: Number, required: true},
    baths: {type: Number, required: true},
    description: String,
    type: {type:String, required:[true, "Please enter for-sale or for-rent"]},
    photos:String,
    user: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }
})

const Property = mongoose.model('Property', PropertySchema)

module.exports = Property;