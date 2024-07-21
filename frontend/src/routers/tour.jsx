const router = require('express').Router()
const ctrls = require('../controllers/tour')
const uploader = require ('../config/cloudinary.config')
router.get('/:tourId', ctrls.getTour);
// router.post('/add', ctrls.createUsers);
router.post('/', uploader.fields([
    {name: 'thumb', maxCount: 1}
]), ctrls.createTour)

module.export = router