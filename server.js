const express = require('express');



// external imports

const cors = require("cors");

// internal imports
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();




// middleware - JSON parsing
app.use(express.json());
app.use(cors());


// middleware - API routes
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/atl-lux/', routes.properties);
app.use('/api/v1/atl-lux/agents', routes.agents);
app.use('/api/v1/atl-lux/auth', routes.auth);
app.use('/api/v1/atl-lux/user', routes.user);

// connection
app.listen(process.env.PORT || 3001, () => console.log(`Server is running on port ${PORT}`));