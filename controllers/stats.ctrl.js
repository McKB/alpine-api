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
      return res.status(400).send('Resort already has stats, please make a put request to update.')
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
const updateStatsByResortId = async (req, res) => {
  try {
    let { trails, acres, verticalDrop, highestElevation } = req.body
    const foundId = req.params.resortId

    const resort = await models.Stats.findOne({ where: { resortId: foundId } })

    if (!resort) {
      return res.status(404).send('Resort does not have stats. Please POST some first.')
    }

    if (trails) {
      trails = Number(trails)
      if (isNaN(trails)) {
        return res.sendStatus(400)
      }
      await models.Stats.update({ trails }, { where: { resortId: foundId } })
    }
    if (acres) {
      acres = Number(acres)
      if (isNaN(acres)) {
        return res.sendStatus(400)
      }
      await models.Stats.update({ acres }, { where: { resortId: foundId } })
    }
    if (verticalDrop) {
      verticalDrop = Number(verticalDrop)
      if (isNaN(verticalDrop)) {
        return res.sendStatus(400)
      }
      await models.Stats.update({ verticalDrop }, { where: { resortId: foundId } })
    }
    if (highestElevation) {
      highestElevation = Number(highestElevation)
      if (isNaN(highestElevation)) {
        return res.sendStatus(400)
      }
      await models.Stats.update({ highestElevation }, { where: { resortId: foundId } })
    }

    const updatedStats = await models.Stats.findOne({ where: { resortId: foundId } })

    return res.status(201).send(updatedStats)
  }
  catch (error) {
    return res.sendStatus(500)
  }
}
const deleteStatsByResortId = async (req, res) => {
  try {
    const searchedId = parseInt(req.params.resortId)
    const stats = await models.Stats.findOne({ where: { resortId: searchedId } })

    if (!stats) {
      return res.status(404).send(`Resort #${searchedId} does not exist or has no stats associated with it.`)
    }

    await models.Stats.destroy({ where: { resortId: searchedId } })

    return res.status(200).send(`We have removed the stats associated with resort #${searchedId} from the database.`)
  }
  catch (error) {
    return res.sendStatus(500)
  }
}

module.exports = {
  getAllStatsWithResorts,
  getStatsByResortIdWithResorts,
  addNewStats,
  updateStatsByResortId,
  deleteStatsByResortId
}
