const models = require('../models/index.model')

const getAllResorts = async (req, res) => {
  try {
    const resorts = await models.Resorts.findAll()

    return resorts
      ? res.status(200).send(resorts)
      : res.sendStatus(404)
  }
  catch (error) {
    return res.sendStatus(500)
  }
}

const getResortByNameWithStats = async (req, res) => {
  try {
    const { name } = req.params

    const resorts = await models.Resorts.findAll({
      where: { resortName: { [models.Op.like]: `%${name}%` } },
      include: [{ model: models.Stats }]
    })

    if (resorts.length !== 0) {
      return res.status(200).send(resorts)
    } else {
      return res.status(404).send('Resort does not exist.')
    }
  }
  catch (error) {
    return res.sendStatus(500)
  }
}

const addResort = async (req, res) => {
  try {
    const { resortName, town, website } = req.body

    if (!resortName || !town || !website) {
      return res.sendStatus(400)
    }

    const newResort = await models.Resorts.create({ resortName, town, website })

    return res.status(201).send(newResort)
  }
  catch (error) {
    return res.sendStatus(500)
  }
}

const deleteResortById = async (req, res) => {
  try {
    const searchedId = parseInt(req.params.id)
    const resort = await models.Resorts.findOne({ where: { id: searchedId } })

    if (!resort) {
      return res.status(404).send(`Resort #${searchedId} does not exist.`)
    }

    const hasStats = await models.Stats.findOne({ where: { resortId: searchedId } })
    const hasLifts = await models.Chairlifts.findOne({ where: { resortId: searchedId } })

    if (hasStats || hasLifts) {
      return res.status(400).send('Resort has dependent stats or chairlifts that need to be removed.')
    }

    await models.Resorts.destroy({ where: { id: searchedId } })

    return res.status(200).send(`We have removed resort #${searchedId} from the database.`)
  }
  catch (error) {
    return res.sendStatus(500)
  }
}

module.exports = { getAllResorts, getResortByNameWithStats, addResort, deleteResortById }
