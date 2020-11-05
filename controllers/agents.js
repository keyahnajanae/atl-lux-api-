const db = require('../models')

const index = (req, res) => {
    db.Agent.find({}, (err, foundAgents) => {
        if (err) console.log('Error in Agent#index:', err);
        if(!foundAgents.length) return res.status(200).json({ "message": "No Agent found in db" });

        res.status(200).json({ "agents": foundAgents });
    });
};


const show = (req, res) => {
    db.Agent.findById(req.params.id, (err, foundAgent) => {
        if (err) console.log('Error in Agents#show:', err);

        if(!foundAgent) return res.status(200).json({ "message": "No agent with that id found in db" });

        res.status(200).json({ "agent": foundAgent });
    });
     
};

const create = (req, res) => {
    db.Agent.create(req.body, (err, savedAgent) => {
        if (err) console.log('Error in Agents#create:', err);

        res.status(201).json({ "agent": savedAgent});
    });
};



const update = (req, res) => {
    db.Agent.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedAgent) => {
        if (err) console.log('Error in Agents#update:', err);

        if(!updatedAgent) return res.status(200).json({ "message": "No agent with that id found in db" });

        res.status(200).json({ "agent": updatedAgent });
    });
};

const destroy = (req, res) => {
     db.Agent.findByIdAndDelete(req.params.id, (err, deletedAgent) => {
         console.log(deletedAgent)
            if (err) console.log('Error in agent#destroy:', err);
            if(!deletedAgent) return res.status(200).json({ "message": "Agent no longer exists" });
    
            res.status(200).json({ "agent": deletedAgent});
        })
       
    }


module.exports = {
    index,
    show,
    create,
    update,
    destroy,
  
};
