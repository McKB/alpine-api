const express = require('express')
const router = express.Router()
const { getAllResorts, getResortByNameWithStats, addResort, deleteResortById } = require('../controllers/resorts.ctrl')

router.get('/', getAllResorts)
router.get('/:name', getResortByNameWithStats)
router.post('/', addResort)
router.delete('/:id', deleteResortById)

module.exports = router
