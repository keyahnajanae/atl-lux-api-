const router = require('express').Router()
const ctrl = require('../controllers')


// routes
router.get('/', ctrl.agents.index)
router.get('/:id', ctrl.agents.show);
router.post('/', ctrl.agents.create);
router.put('/:id', ctrl.agents.update);
router.delete('/:id', ctrl.agents.destroy);



module.exports = router;