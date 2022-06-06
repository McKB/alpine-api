const express = require('express')
const getDocumentation = require('../controllers/index.ctrl')
const router = express.Router()

router.get('/', getDocumentation)

module.exports = router
