const router = require('express').Router()
const ctrl = require('../controllers')


// routes
router.get('/properties', ctrl.properties.index);
router.get('/for-rent', ctrl.properties.indexRent);
router.get('/for-sale', ctrl.properties.indexSale);
router.get('/properties/:id', ctrl.properties.show);
router.post('/', ctrl.properties.create);
router.put('/:id', ctrl.properties.update);
router.delete('/:id', ctrl.properties.destroy);



module.exports = router;