const router = require('express').Router()
const ctrl = require('../controllers')
const authRequired = require('../middleware/authRequired')


// routes
router.get('/properties', ctrl.properties.index);
router.post('/properties', authRequired, ctrl.properties.createListing);
router.get('/properties/sales/:id', ctrl.properties.showSales);
router.get('/properties/rentals/:id', ctrl.properties.showRentals);
router.get('/for-rent', ctrl.properties.indexRent);
router.get('/for-sale', ctrl.properties.indexSale);
router.get('/properties/:id', ctrl.properties.show);
router.put('/properties/:id', ctrl.properties.update);
router.delete('/properties/:id',authRequired, ctrl.properties.destroy);



module.exports = router;