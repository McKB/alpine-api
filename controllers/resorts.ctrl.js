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
const addResort = () => {

}
const deleteResortById = () => {

}

module.exports = { getAllResorts, getResortByNameWithStats, addResort, deleteResortById }
