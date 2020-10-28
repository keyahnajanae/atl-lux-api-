const db = require('./models');
const property_Data = require('./propertyData.json');



db.Property.deleteMany({}, (err, deletedProperties) => {
    db.Property.create(property_Data.properties, (err, seededProperties) => {
        if (err) console.log(err);
            
        console.log(property_Data.properties.length, 'properties created successfully');
            
            process.exit();
        });
    });

