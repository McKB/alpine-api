const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const { describe, it, beforeEach, afterEach } = require('mocha')
const {
  getAllStatsWithResorts,
  getStatsByResortIdWithResorts,
  addNewStats,
  updateStatsByResortId,
  deleteStatsByResortId
} = require('../../controllers/resorts.ctrl')
const { Stats } = require('../../models/index.model')
const models = require('../../models/index.model')
const {
  statsList, statsA, statsB, statsC, incompleteStats, invalidStats
} = require('../mocks/stats')

chai.use(sinonChai)
const { expect } = chai

describe('testing the stats controller', () => {
  let sandbox = sinon.createSandbox()
  let stubbedFindAll = sandbox.stub(Stats, 'findAll')
  let stubbedFindOne = sandbox.stub(Stats, 'findOne')
  let stubbedCreate = sinon.stub(Stats, 'create')
  let stubbedDestroy = sinon.stub(Stats, 'destroy')
  let stubbedUpdate = sinon.stub(Stats, 'update')
  let stubbedSend = sandbox.stub()
  let stubbedStatus = sandbox.stub()
  let stubbedSendStatus = sandbox.stub()
  let response = {
    send: stubbedSend,
    sendStatus: stubbedSendStatus,
    status: stubbedStatus,
  }

  beforeEach(() => {
    stubbedStatus.returns({ send: stubbedSend })
  })

  afterEach(() => {
    sandbox.reset()
  })

  describe('getAllStatsWithResorts', () => {
    it('gets all stats from the database and responds with a list including the resorts', async () => {
      stubbedFindAll.returns(statsList)

      await getAllStatsWithResorts({}, response)

      expect(stubbedFindAll).to.have.callCount(1)
      expect(stubbedStatus).to.have.been.calledWith(200)
      expect(stubbedSend).to.have.been.calledWith(statsList)
    })
    it('returns status 500 when the database goes down, throws error', async () => {
      stubbedFindAll.throws('Error')

      await getAllStatsWithResorts({}, response)

      expect(stubbedFindAll).to.have.callCount(1)
      expect(stubbedSendStatus).to.have.been.calledWith(500)
    })
  })

  describe('getStatsByResortIdWithResorts', () => {
    it('gets a group of stats from the database based on resort ID and includes the resort', async () => {
      const request = { params: { resortId: 13 } }

      stubbedFindAll.returns(statsA)

      await getStatsByResortIdWithResorts(request, response)

      expect(stubbedFindAll).to.have.been.calledWith({ where: { resortId: 13 }, include: [{ model: models.Resorts }] })
      expect(stubbedFindAll).to.have.callCount(1)
      expect(stubbedStatus).to.have.been.calledWith(200)
      expect(stubbedSend).to.have.been.calledWith(statsA)
    })

    it('returns 404 when no stats are found in the database for that resort', async () => {
      const request = { params: { resortId: 99 } }

      stubbedFindAll.returns([])

      await getStatsByResortIdWithResorts(request, response)

      expect(stubbedFindAll).to.have.been.calledWith({ where: { resortId: 99 }, include: [{ model: models.Resorts }] })
      expect(stubbedFindAll).to.have.callCount(1)
      expect(stubbedStatus).to.have.been.calledWith(404)
      expect(stubbedSend).to.have.been.calledWith('Stats do not exist for this resort or the resort does not exist.')
    })

    it('returns 500 when the database is down', async () => {
      const request = { params: { resortId: 13 } }

      stubbedFindAll.throws('Error')

      await getStatsByResortIdWithResorts(request, response)

      expect(stubbedFindAll).to.have.been.calledWith({ where: { resortId: 13 }, include: [{ model: models.Resorts }] })
      expect(stubbedFindAll).to.have.callCount(1)
      expect(stubbedSendStatus).to.have.been.calledWith(500)
    })
  })

  describe('addNewStats', () => {
    it('adds a new set of stats to the database', async () => {
      const request = { body: statsB }

      stubbedCreate.returns(statsB)

      await addNewStats(request, response)

      expect(stubbedCreate).to.have.been.calledWith(statsB)
      expect(stubbedCreate).to.have.callCount(1)
      expect(stubbedStatus).to.have.been.calledWith(201)
      expect(stubbedSend).to.have.been.calledWith(statsB)
    })

    it('sends 400 status if not all requirements are met', async () => {
      const request = { body: incompleteStats }

      await addNewStats(request, response)

      expect(stubbedSendStatus).to.have.been.calledWith(400)
    })

    it('sends 500 status if database errors out', async () => {
      const request = { body: statsB }

      stubbedCreate.throws('Error')

      await addNewStats(request, response)

      expect(stubbedCreate).to.have.been.calledWith(statsB)
      expect(stubbedSendStatus).to.have.been.calledWith(500)
    })
  })

  describe('updateStatsByResortId', () => {
    it('updates a set of stats in the database by resort Id', async () => {
      const request = { body: statsC, params: { resortId: 20 } }

      stubbedUpdate.returns(1)
      stubbedFindOne.returns(statsB)

      await updateStatsByResortId(request, response)

      expect(stubbedUpdate).to.have.been.calledWith(statsC, { where: { resortId: 20 } })
      expect(stubbedUpdate).to.have.callCount(1)
      expect(stubbedFindOne).to.have.been.calledWith({ where: { resortId: 20 } })
      expect(stubbedFindOne).to.have.callCount(1)
      expect(stubbedStatus).to.have.been.calledWith(201)
      expect(stubbedSend).to.have.been.calledWith(statsB)
    })

    it('sends 400 status if data type is incorrect', async () => {
      const request = { body: invalidStats, params: { resortId: 20 } }

      await updateStatsByResortId(request, response)

      expect(stubbedSendStatus).to.have.been.calledWith(400)
    })

    it('sends 500 status if database errors out', async () => {
      const request = { body: statsC }

      stubbedUpdate.throws('Error')

      await updateStatsByResortId(request, response)

      expect(stubbedUpdate).to.have.been.calledWith(statsC, { where: { resortId: 20 } })
      expect(stubbedSendStatus).to.have.been.calledWith(500)
    })
  })

  describe('deleteStatsByResortId', () => {
    it('responds with a confirmation when stats group is deleted', async () => {
      stubbedFindOne.returns(statsA)
      const request = { params: { resortId: 13 } }

      await deleteStatsByResortId(request, response)

      expect(stubbedFindOne).to.have.been.calledWith({ where: { resortId: 13 } })
      expect(stubbedFindOne).to.have.callCount(1)
      expect(stubbedDestroy).to.have.been.calledWith({ where: { resortId: 13 } })
      expect(stubbedDestroy).to.have.callCount(1)
      expect(response.status).to.have.been.calledWith(200)
      // eslint-disable-next-line max-len
      expect(response.send).to.have.been.calledWith('We have removed the stats associated with resort #13 from the database.')
    })

    it('sends 404 when stats for searched resort do not exist', async () => {
      stubbedFindOne.returns(null)

      const request = { params: { resortId: 99 } }

      await deleteStatsByResortId(request, response)

      expect(stubbedFindOne).to.have.been.calledWith({ where: { resortId: 99 } })
      expect(stubbedFindOne).to.have.callCount(1)
      expect(stubbedDestroy).to.have.callCount(0)
      expect(response.status).to.have.been.calledWith(404)
      expect(stubbedSend).to.have.been.calledWith('Resort #99 does not exist or has no stats associated with it.')
    })

    it('sends 500 status if database errors out', async () => {
      stubbedFindOne.returns(statsA)
      stubbedDestroy.throws('Error')

      const request = { params: { resortId: 13 } }

      await deleteStatsByResortId(request, response)

      expect(stubbedFindOne).to.have.been.calledWith({ where: { resortId: 13 } })
      expect(stubbedDestroy).to.have.been.calledWith({ where: { resortId: 13 } })
      expect(stubbedSendStatus).to.have.been.calledWith(500)
    })
  })
})
