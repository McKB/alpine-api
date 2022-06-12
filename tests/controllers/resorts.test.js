const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const { describe, it, beforeEach, afterEach } = require('mocha')
const {
  getAllResorts,
  getResortByNameWithStats,
  addResort,
  deleteResortById
} = require('../../controllers/resorts.ctrl')
const { resorts } = require('../../models/index.model')
const { resortsList, resortA, resortB, incompleteResort } = require('../mocks/resorts')

chai.use(sinonChai)
const { expect } = chai

describe('testing the resorts controller', () => {
  let sandbox = sinon.createSandbox()
  let stubbedFindAll = sandbox.stub(resorts, 'findAll')
  let stubbedFindOne = sandbox.stub(resorts, 'findOne')
  let stubbedCreate = sinon.stub(resorts, 'create')
  let stubbedDestroy = sinon.stub(resorts, 'destroy')
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

  describe('getAllResorts', () => {
    it('gets all resorts from the database and responds with a list of all the resorts', async () => {
      stubbedFindAll.returns(resortsList)

      await getAllResorts({}, response)

      expect(stubbedFindAll).to.have.callCount(1)
      expect(stubbedStatus).to.have.been.calledWith(200)
      expect(stubbedSend).to.have.been.calledWith(resortsList)
    })
    it('returns status 500 when the database goes down, throws error', async () => {
      stubbedFindAll.throws('Error')

      await getAllResorts({}, response)

      expect(stubbedFindAll).to.have.callCount(1)
      expect(stubbedSendStatus).to.have.been.calledWith(500)
    })
  })

  describe('getResortByNameWithStats', () => {
    it('gets a resort (or multiple) from the database based on name search and includes Stats', async () => {
      const request = { params: { name: 'stowe' } }

      stubbedFindAll.returns(resortA)

      await getResortByNameWithStats(request, response)

      expect(stubbedFindAll).to.have.been.calledWith({ where: { name: 'stowe' } })
      expect(stubbedFindAll).to.have.callCount(1)
      expect(stubbedStatus).to.have.been.calledWith(200)
      expect(stubbedSend).to.have.been.calledWith(resortA)
    })
    it('returns 404 when no resort is found in the database', async () => {
      const request = { params: { name: 'unknown_resort' } }

      stubbedFindAll.returns(null)

      await getResortByNameWithStats(request, response)

      expect(stubbedFindAll).to.have.been.calledWith({ where: { name: 'unknown_resort' } })
      expect(stubbedFindAll).to.have.callCount(1)
      expect(stubbedStatus).to.have.been.calledWith(404)
      expect(stubbedSend).to.have.been.calledWith('Resort does not exist.')
    })
    it('returns 500 when the database is down', async () => {
      const request = { params: { name: 'stowe' } }

      stubbedFindAll.throws('Error')

      await getResortByNameWithStats(request, response)

      expect(stubbedFindAll).to.have.been.calledWith({ where: { name: 'stowe' } })
      expect(stubbedFindAll).to.have.callCount(1)
      expect(stubbedSendStatus).to.have.been.calledWith(500)
    })
  })

  describe('addResort', () => {
    it('adds a new resort to the database', async () => {
      const request = { body: resortB }

      stubbedCreate.returns(resortB)

      await addResort(request, response)

      expect(stubbedCreate).to.have.been.calledWith(resortB)
      expect(stubbedCreate).to.have.callCount(1)
      expect(stubbedStatus).to.have.been.calledWith(201)
      expect(stubbedSend).to.have.been.calledWith(resortB)
    })
    it('sends 400 status if not all requirements are met', async () => {
      const request = { body: incompleteResort }

      await addResort(request, response)

      expect(stubbedSendStatus).to.have.been.calledWith(400)
    })
    it('sends 500 status if database errors out', async () => {
      const request = { body: resortB }

      stubbedCreate.throws('Error')

      await addResort(request, response)

      expect(stubbedCreate).to.have.been.calledWith(resortB)
      expect(stubbedSendStatus).to.have.been.calledWith(500)
    })
  })

  describe('deleteResortById', () => {
    it('responds with a confirmation when resort is deleted', async () => {
      stubbedFindOne.returns(resortA)
      const request = { params: { id: 23 } }

      await deleteResortById(request, response)

      expect(stubbedFindOne).to.have.been.calledWith({ where: { id: 23 } })
      expect(stubbedFindOne).to.have.callCount(1)
      expect(stubbedDestroy).to.have.been.calledWith({ where: { id: 23 } })
      expect(stubbedDestroy).to.have.callCount(1)
      expect(response.status).to.have.been.calledWith(200)
      expect(response.send).to.have.been.calledWith('We have removed resort #23 from the database.')
    })

    it('sends 404 when resort does not exist', async () => {
      stubbedFindOne.returns(null)

      const request = { params: { id: 99 } }

      await deleteResortById(request, response)

      expect(stubbedFindOne).to.have.been.calledWith({ where: { id: 99 } })
      expect(stubbedFindOne).to.have.callCount(1)
      expect(stubbedDestroy).to.have.callCount(0)
      expect(response.status).to.have.been.calledWith(404)
      expect(stubbedSend).to.have.been.calledWith('Resort #99 does not exist.')
    })

    it('sends 500 status if database errors out', async () => {
      stubbedFindOne.returns(resortA)
      stubbedDestroy.throws('Error')

      const request = { params: { id: 23 } }

      await deleteResortById(request, response)

      expect(stubbedFindOne).to.have.been.calledWith({ where: { id: 23 } })
      expect(stubbedDestroy).to.have.been.calledWith({ where: { id: 23 } })
      expect(stubbedSendStatus).to.have.been.calledWith(500)
    })
  })
})
