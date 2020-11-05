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



const update = (req, res) => {
    db.User.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedUser) => {
        if (err) console.log('Error in User update:', err);

        if(!updatedUser) return res.status(200).json({ "message": "No user with that id found in db" });

        res.status(200).json({ "user": updatedUser });
    });
};

module.exports ={
    show,
    update
    
    
}


// Make a ctrl to create saved listing ?
// Make an update route