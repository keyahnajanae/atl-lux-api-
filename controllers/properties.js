const db = require('../models')

const index = (req, res) => {
    db.Property.find({}).populate("agent").exec((err, foundProperties) => {
        if (err) console.log('Error in property#index:', err);
        if(!foundProperties.length) return res.status(200).json({ "message": "No property found in db" });
        res.status(200).json({ "properties": foundProperties });
    });
};

//make query to find for sale and for rent 
// Make a route for when a user clicks on a prop id , that will make an instance of the prop and push it to their own saved prop page


const createListing = (req, res) => {

   db.Property.create(req.body, (err, createdProperty) => {
         if (err) console.log('Error in Propertys#create:', err);
        db.User.findById(req.userId,(err, foundUser) =>{
             if(err) console.log("Error") 
             console.log(foundUser)
             foundUser.property.push(createdProperty)
             foundUser.save()
         })
         
         res.status(201).json({"property": createdProperty});
     });
 };

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
    db.Property.findById(req.params.id).populate("agent").exec ((err, foundProperty) => {
        if (err) console.log('Error in propertys#show:', err);

        if(!foundProperty) return res.status(200).json({ "message": "No property with that id found in db" });

        res.status(200).json({ "property": foundProperty });
    });
};

const showRentals = (req, res) => {
    db.Property.findById(req.params.id).findOne({type: 'for-rent'}, ((err, rentalProperty) => {
        if (err) console.log('Error in rental propertys#show:', err);

        if(!rentalProperty) return res.status(200).json({ "message": "No rental property with that id found in db" });

        res.status(200).json({ "rentalProperty": rentalProperty });
    }));
};

const showSales = (req, res) => {
    db.Property.findById(req.params.id).findOne({type: 'for-sale'}, ((err, saleProperty) => {
        if (err) console.log('Error in sale propertys#show:', err);

        if(!saleProperty) return res.status(200).json({ "message": "No sale property with that id found in db" });

        res.status(200).json({ "saleProperty": saleProperty });
    }));
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
    createListing,
    indexRent,
    showRentals,
    showSales,
    show,
    update,
    destroy,
};

