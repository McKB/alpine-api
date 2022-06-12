const express = require('express')
const router = express.Router()
const {
  getAllChairlifts,
  getChairliftByResortId,
  addChairlift,
  deleteChairliftById
} = require('../controllers/chairlifts.ctrl')

router.get('/', getAllChairlifts)
router.get('/:resortId', getChairliftByResortId)
router.post('/', addChairlift)
router.delete('/:id', deleteChairliftById)

module.exports = router
