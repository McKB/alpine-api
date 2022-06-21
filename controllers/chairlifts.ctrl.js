const models = require('../models/index.model')

const getAllChairlifts = async (req, res) => {
  try {
    const chairs = await models.Chairlifts.findAll()

    return res.status(200).send(chairs)
  }
  catch (error) {
    return res.sendStatus(500)
  }
}

const getChairliftByResortId = async (req, res) => {
  try {
    const { resortId } = req.params
    const chairs = await models.Chairlifts.findAll({
      where: { resortId }
    })

    if (!chairs || chairs.length === 0) {
      return res.status(404).send('Resort does not exist or has no chairlifts.')
    }

    return res.status(200).send(chairs)
  }
  catch (error) {
    return res.sendStatus(500)
  }
}

const addChairlift = async (req, res) => {
  try {
    const { liftType, liftName, resortId, shapeLength } = req.body

    if (!liftType || !liftName || !resortId || !shapeLength) {
      return res.sendStatus(400)
    }

    const newLift = await models.Chairlifts.create({ liftType, liftName, resortId, shapeLength })

    return res.status(201).send(newLift)
  }
  catch (error) {
    return res.sendStatus(500)
  }
}
const deleteChairliftById = () => {

}

module.exports = { getAllChairlifts, getChairliftByResortId, addChairlift, deleteChairliftById }
