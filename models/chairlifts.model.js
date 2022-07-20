const chairlifts = (connection, Sequelize, Resorts) => {
  return connection.define('chairlifts', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    liftType: { type: Sequelize.STRING },
    liftName: { type: Sequelize.STRING },
    resortId: { type: Sequelize.INTEGER, references: { model: Resorts, key: 'id' } },
    shapeLength: { type: Sequelize.FLOAT }
  }, { paranoid: true })
}

module.exports = { chairlifts }
