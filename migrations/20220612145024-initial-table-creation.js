'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('resorts', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      resortName: { type: Sequelize.STRING },
      town: { type: Sequelize.STRING },
      website: { type: Sequelize.STRING },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('NOW()') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('NOW() ON UPDATE NOW()') },
      deletedAt: { type: Sequelize.DATE }
    })

    await queryInterface.createTable('chairlifts', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      liftType: { type: Sequelize.STRING },
      liftName: { type: Sequelize.STRING },
      resortId: { type: Sequelize.INTEGER, references: { model: 'resorts', key: 'id' } },
      shapeLength: { type: Sequelize.FLOAT },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('NOW()') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('NOW() ON UPDATE NOW()') },
      deletedAt: { type: Sequelize.DATE }
    })

    return queryInterface.createTable('stats', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      resortId: { type: Sequelize.INTEGER, references: { model: 'resorts', key: 'id' } },
      trails: { type: Sequelize.INTEGER },
      acres: { type: Sequelize.FLOAT },
      verticalDrop: { type: Sequelize.FLOAT },
      highestElevation: { type: Sequelize.FLOAT },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('NOW()') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('NOW() ON UPDATE NOW()') },
      deletedAt: { type: Sequelize.DATE }
    })
  },

  async down(queryInterface) {
    await queryInterface.dropTable('stats')

    await queryInterface.dropTable('chairlifts')

    return queryInterface.dropTable('resorts')
  }
}
