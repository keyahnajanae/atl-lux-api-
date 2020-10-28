const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const AgentSchema = new Schema ({
    name: String,
    agency: String,
    number: String,
    property: [{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: "Property",
    }]
})

const Agent = mongoose.model('Agent', AgentSchema)

module.exports = Agent;