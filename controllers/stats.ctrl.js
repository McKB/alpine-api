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

const addNewStats = () => {

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
