const models = require('../models/index.model')

const getAllStatsWithResorts = async (req, res) => {
  try {
    const stats = await models.Stats.findAll({
      include: [{ model: models.Resorts }]
    })

    return res.status(200).send(stats)
  }
  catch (error) {
    return res.sendStatus(500)
  }
}

const getStatsByResortIdWithResorts = async (req, res) => {
  try {
    const { resortId } = req.params

    const stats = await models.Stats.findOne({
      where: { resortId },
      include: [{ model: models.Resorts }]
    })

    if (!stats) {
      return res.status(404).send('Stats do not exist for this resort or the resort does not exist.')
    }

    return res.status(200).send(stats)
  }
  catch (error) {
    return res.sendStatus(500)
  }
}

const addNewStats = async (req, res) => {
  try {
    const {
      resortId, trails, acres, verticalDrop, highestElevation
    } = req.body

    if (!resortId) {
      return res.sendStatus(400)
    }

    const existingStats = await models.Stats.findOne({ where: { resortId } })

    if (existingStats) {
      return res.status(400).send('Resort already has stats, please make a put request')
    }

    const newStats = await models.Stats.create({
      resortId, trails, acres, verticalDrop, highestElevation
    })

    return res.status(201).send(newStats)
  }
  catch (error) {
    return res.sendStatus(500)
  }
}
const updateStatsByResortId = () => {

}
const deleteStatsByResortId = () => {

}

module.exports = {
  getAllStatsWithResorts,
  getStatsByResortIdWithResorts,
  addNewStats,
  updateStatsByResortId,
  deleteStatsByResortId
}
