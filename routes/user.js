const router = require('express').Router()
const ctrl = require('../controllers')

router.get('/:id', ctrl.user.show)
router.put('/:id/saved-listings', ctrl.user.indexSaved)

// router.get('/saved-listings', ctrl.user.savedListings)
// for when the update updates and reroutes


// create an edit/update route for users
// a post route

module.exports = router;