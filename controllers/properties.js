const db = require('../models')

const index = (req, res) => {
    db.Property.find({}, (err, foundProperties) => {
        if (err) console.log('Error in property#index:', err);
        if(!foundProperties.length) return res.status(200).json({ "message": "No property found in db" });
        res.status(200).json({ "properties": foundProperties });
    });
};

//make query to find for sale and for rent 

const indexSale = (req, res) => {
    db.Property.find({type: 'for-sale'}, (err, forSaleProperties) => {
        if (err) console.log('Error in sale property#index:', err);
        if(!forSaleProperties.length) return res.status(200).json({ "message": "No sale properties found in db" });
        res.status(200).json({ "forSale": forSaleProperties });
    });
};
const indexRent = (req, res) => {
    db.Property.find({type: 'for-rent'}, (err, forRent) => {
        if (err) console.log('Error in rental property#index:', err);
        if(!forRent.length) return res.status(200).json({ "message": "No rental properties found in db" });
        res.status(200).json({ "forRent": forRent });
    });
};
// Index route for for-sale properties
// Index route for for-rent properties

const show = (req, res) => {
    db.Property.findById(req.params.id, (err, foundProperty) => {
        if (err) console.log('Error in propertys#show:', err);

        if(!foundProperty) return res.status(200).json({ "message": "No property with that id found in db" });

        res.status(200).json({ "property": foundProperty });
    });
};

const create = async (req, res) => {
    console.log(req.params.id)
   await db.Property.create(req.body, (err, createdProperty) => {
        if (err) console.log('Error in Propertys#create:', err);
       db.Agent.findById(createdProperty.agent,(err, foundAgent) =>{
            if(err) console.log("Error") 
            foundAgent.property.push(createdProperty)
            foundAgent.save()
        })

        res.status(201).json({ "property": createdProperty });
    });
};

const update = (req, res) => {
    db.Property.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedProperty) => {
        if (err) console.log('Error in Propertys#update:', err);

        if(!updatedProperty) return res.status(200).json({ "message": "No property with that id found in db" });

        res.status(200).json({ "property": updatedProperty });
    });
};

const destroy = (req, res) => {
    db.Property.findByIdAndDelete(req.params.id, (err, deletedProperty) => {
        if (err) console.log('Error in property#destroy:', err);

        if(!deletedProperty) return res.status(200).json({ "message": "No game with that id found in db" });

        res.status(200).json({ "property": deletedProperty});
    });
};


module.exports = {
    index,
    indexSale,
    indexRent,
    show,
    create,
    update,
    destroy,
};

