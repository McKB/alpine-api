const express = require('express')
const router = express.Router()

router.get('/')
router.get('/:resortId')
router.post('/')
router.put('/update/:resortId')
router.delete('/:resortId')

module.exports = router
