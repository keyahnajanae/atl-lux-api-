const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const format = require("format-helper");
const culture = Culture.set("en-US");

const PropertySchema = new Schema ({
    title: { type: String, required: [true, "Please provide a descriptive title for property"] },
    address: { type: String, required: true},
    price: Number,
    beds: {type: Number, required: true},
    baths: {type: Number, required: true},
    description: String,
    type: {type:String, required:true},
    amenities:String,
    photos:String,
    agent: [{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: "Agent",
    }]
})

const Property = mongoose.model('Property', PropertySchema)

module.exports = Property;