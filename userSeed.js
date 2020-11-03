const db = require('./models/User');
const data = require('./userData.json');


db.User.deleteMany({}, (err, deletedUsers) => {
    db.User.create(data.users, (err, seededUsers) => {
        if (err) console.log(err);
            console.log(data.users.length, 'users created successfully');
            
            process.exit();
        });
    });

    