const router = require('express').Router()
const ctrl = require('../controllers')


// routes
router.get('/', ctrl.properties.index)
router.get('/:id', ctrl.properties.show);
router.post('/', ctrl.properties.create);
router.put('/:id', ctrl.properties.update);
router.delete('/:id', ctrl.properties.destroy);



module.exports = router;