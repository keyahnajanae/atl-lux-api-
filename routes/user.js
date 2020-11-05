const router = require('express').Router()
const ctrl = require('../controllers')
const authRequired = require("../middleware/authRequired");

router.get("/", authRequired, ctrl.user.show);
router.put('/:id', ctrl.user.update);



// create an edit/update route for users
// a post route

module.exports = router;