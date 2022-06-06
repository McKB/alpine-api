const express = require('express')
const router = express.Router()

router.get('/')
router.get('/:name')
router.post('/')
router.delete('/:id')

module.exports = router
