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

    trails ? trails : trails = 0
    acres ? acres : acres = 0
    verticalDrop ? verticalDrop : verticalDrop = 0
    highestElevation ? highestElevation : highestElevation = 0

    let objectToUpdate = {
      trails, acres, verticalDrop, highestElevation
    }

    const resort = await models.Stats.findOne({ where: { resortId: foundId } })

    if (!resort) {
      const createdStats = await models.Stats.create({ resortId: foundId, ...objectToUpdate })

      return res.status(201).send(`Posted stats ${createdStats}`)
    }

    for (let [key, value] of Object.entries(objectToUpdate)) {
      if (value) {
        value = Number(value)
        if (isNaN(value)) {
          return res.sendStatus(400)
        }
        await models.Stats.update({ [key]: value }, { where: { resortId: foundId } })
      }
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
