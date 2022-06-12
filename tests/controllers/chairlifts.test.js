const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const { describe, it, beforeEach, afterEach } = require('mocha')
const {
  getAllChairlifts,
  getChairliftByResortId,
  addChairlift,
  deleteChairliftById
} = require('../../controllers/chairlifts.ctrl')
const { Chairlifts } = require('../../models/index.model')
const {
  chairliftsList, liftsFor17, liftA, liftB, incompleteLift
} = require('../mocks/chairlifts')

chai.use(sinonChai)
const { expect } = chai

describe('testing the chairlifts controller', () => {
  let sandbox = sinon.createSandbox()
  let stubbedFindAll = sandbox.stub(Chairlifts, 'findAll')
  let stubbedFindOne = sandbox.stub(Chairlifts, 'findOne')
  let stubbedCreate = sinon.stub(Chairlifts, 'create')
  let stubbedDestroy = sinon.stub(Chairlifts, 'destroy')
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

  describe('getAllChairlifts', () => {
    it('gets all chairlifts from the database and responds with a list of all the lifts', async () => {
      stubbedFindAll.returns(chairliftsList)

      await getAllChairlifts({}, response)

      expect(stubbedFindAll).to.have.callCount(1)
      expect(stubbedStatus).to.have.been.calledWith(200)
      expect(stubbedSend).to.have.been.calledWith(chairliftsList)
    })
    it('returns status 500 when the database goes down, throws error', async () => {
      stubbedFindAll.throws('Error')

      await getAllChairlifts({}, response)

      expect(stubbedFindAll).to.have.callCount(1)
      expect(stubbedSendStatus).to.have.been.calledWith(500)
    })
  })

  describe('getChairliftByResortId', () => {
    it('gets a chairlift (or multiple) from the database based on resort ID', async () => {
      const request = { params: { resortId: 18 } }

      stubbedFindAll.returns(liftsFor17)

      await getChairliftByResortId(request, response)

      expect(stubbedFindAll).to.have.been.calledWith({ where: { resortId: 18 } })
      expect(stubbedFindAll).to.have.callCount(1)
      expect(stubbedStatus).to.have.been.calledWith(200)
      expect(stubbedSend).to.have.been.calledWith(liftsFor17)
    })
    it('returns 404 when no lifts are found in the database for the resort ID', async () => {
      const request = { params: { resortId: 99 } }

      stubbedFindAll.returns(null)

      await getChairliftByResortId(request, response)

      expect(stubbedFindAll).to.have.been.calledWith({ where: { resortId: 99 } })
      expect(stubbedFindAll).to.have.callCount(1)
      expect(stubbedStatus).to.have.been.calledWith(404)
      expect(stubbedSend).to.have.been.calledWith('Resort does not exist or has no chairlifts.')
    })
    it('returns 500 when the database is down', async () => {
      const request = { params: { resortId: 18 } }

      stubbedFindAll.throws('Error')

      await getChairliftByResortId(request, response)

      expect(stubbedFindAll).to.have.been.calledWith({ where: { id: 18 } })
      expect(stubbedFindAll).to.have.callCount(1)
      expect(stubbedSendStatus).to.have.been.calledWith(500)
    })
  })

  describe('addChairlift', () => {
    it('adds a new chairlift to the database', async () => {
      const request = { body: liftB }

      stubbedCreate.returns(liftB)

      await addChairlift(request, response)

      expect(stubbedCreate).to.have.been.calledWith(liftB)
      expect(stubbedCreate).to.have.callCount(1)
      expect(stubbedStatus).to.have.been.calledWith(201)
      expect(stubbedSend).to.have.been.calledWith(liftB)
    })

    it('sends 400 status if not all requirements are met', async () => {
      const request = { body: incompleteLift }

      await addChairlift(request, response)

      expect(stubbedSendStatus).to.have.been.calledWith(400)
    })

    it('sends 500 status if database errors out', async () => {
      const request = { body: liftB }

      stubbedCreate.throws('Error')

      await addChairlift(request, response)

      expect(stubbedCreate).to.have.been.calledWith(liftB)
      expect(stubbedSendStatus).to.have.been.calledWith(500)
    })
  })

  describe('deleteChairliftById', () => {
    it('responds with a confirmation when chairlift is deleted', async () => {
      stubbedFindOne.returns(liftA)
      const request = { params: { id: 86 } }

      await deleteChairliftById(request, response)

      expect(stubbedFindOne).to.have.been.calledWith({ where: { id: 86 } })
      expect(stubbedFindOne).to.have.callCount(1)
      expect(stubbedDestroy).to.have.been.calledWith({ where: { id: 86 } })
      expect(stubbedDestroy).to.have.callCount(1)
      expect(response.status).to.have.been.calledWith(200)
      expect(response.send).to.have.been.calledWith('We have removed chairlift #86 from the database.')
    })

    it('sends 404 when chairlift does not exist', async () => {
      stubbedFindOne.returns(null)

      const request = { params: { id: 999 } }

      await deleteChairliftById(request, response)

      expect(stubbedFindOne).to.have.been.calledWith({ where: { id: 999 } })
      expect(stubbedFindOne).to.have.callCount(1)
      expect(stubbedDestroy).to.have.callCount(0)
      expect(response.status).to.have.been.calledWith(404)
      expect(stubbedSend).to.have.been.calledWith('Chairlift #999 does not exist.')
    })

    it('sends 500 status if database errors out', async () => {
      stubbedFindOne.returns(liftA)
      stubbedDestroy.throws('Error')

      const request = { params: { id: 86 } }

      await deleteChairliftById(request, response)

      expect(stubbedFindOne).to.have.been.calledWith({ where: { id: 86 } })
      expect(stubbedDestroy).to.have.been.calledWith({ where: { id: 86 } })
      expect(stubbedSendStatus).to.have.been.calledWith(500)
    })
  })
})
