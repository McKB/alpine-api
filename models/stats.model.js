const stats = (connection, Sequelize, Resorts) => {
  return connection.define('stats', {
    resortId: { type: Sequelize.INTEGER, primaryKey: true, references: { model: Resorts, key: 'id' } },
    trails: { type: Sequelize.INTEGER },
    acres: { type: Sequelize.FLOAT },
    verticalDrop: { type: Sequelize.FLOAT },
    highestElevation: { type: Sequelize.FLOAT }
  }, { paranoid: true })
}

module.exports = { stats }
