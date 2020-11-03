const db = require('../models')



const show = async (req, res) => {
  try {
    const foundUser = await db.User.findById(req.userId);
    res.status(200).json({ status: 200, data: foundUser });
  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: "Something went wrong. Please try again",
    });
  }
};


const indexSaved = (req, res) => {
    const property = req.params.id
    db.User.findById(req.params.id, (err, foundUser) => {
        if (err) return res.status(500).json({status: 500, error:[{message: 'Something went wrong'}],
      });
      return 
        // foundUser.savedListings.push(property);
        // foundUser.save();
    });
};
// const update = (req, res) => {
//     db.Property.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedProperty) => {
//         if (err) console.log('Error in Propertys#update:', err);

//         if(!updatedProperty) return res.status(200).json({ "message": "No property with that id found in db" });

//         res.status(200).json({ "property": updatedProperty });
//     });
// };
const savedListings = (req, res) => {
    

    };

module.exports ={
    indexSaved,
    show,
    savedListings,
    
}


// Make a ctrl to create saved listing ?
// Make an update route