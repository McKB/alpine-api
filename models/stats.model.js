const stats = (connection, Sequelize, Resorts) => {
  return connection.define('stats', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    resortId: { type: Sequelize.INTEGER, references: { model: Resorts, key: 'id' } },
    trails: { type: Sequelize.INTEGER },
    acres: { type: Sequelize.FLOAT },
    verticalDrop: { type: Sequelize.FLOAT },
    highestElevation: { type: Sequelize.FLOAT }
  }, { paranoid: true })
}

module.exports = { stats }
