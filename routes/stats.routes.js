const express = require('express')
const router = express.Router()
const {
  getAllStatsWithResorts,
  getStatsByResortIdWithResorts,
  addNewStats,
  updateStatsByResortId,
  deleteStatsByResortId
} = require('../controllers/stats.ctrl')

router.get('/', getAllStatsWithResorts)
router.get('/:resortId', getStatsByResortIdWithResorts)
router.post('/', addNewStats)
router.put('/update/:resortId', updateStatsByResortId)
router.delete('/:resortId', deleteStatsByResortId)

module.exports = router
