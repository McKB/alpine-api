'use strict'

const { resorts } = require('../data/resorts')
const { lifts } = require('../data/lifts')
const { stats } = require('../data/stats')

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('resorts', resorts)

    await queryInterface.bulkInsert('chairlifts', lifts)

    return queryInterface.bulkInsert('stats', stats)
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('stats', stats)

    await queryInterface.bulkDelete('chairlifts', lifts)

    return queryInterface.bulkDelete('resorts', resorts)
  }
}
