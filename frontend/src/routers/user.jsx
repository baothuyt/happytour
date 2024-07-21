const router = require('express').Router()
const ctrls = require('../controllers/user')

router.get('/user', ctrls.getUsers);
router.post('/add', ctrls.createUsers);
// router.put('/:uid', clrls.updateUserByAdmin)

module.export = router