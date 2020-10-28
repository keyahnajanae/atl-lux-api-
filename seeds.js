
const db = require('./models');
const agent_Data = require('./agentData.json');


db.Agent.deleteMany({}, (err, deletedAgents) => {
    db.Agent.create(agent_Data.agents, (err, seededAgents) => {
        if (err) console.log(err);
            console.log(agent_Data.agents.length, 'agents created successfully');
            
            process.exit();
        });
    });

    