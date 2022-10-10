const resorts = (connection, Sequelize) => {
  return connection.define('resorts', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    resortName: { type: Sequelize.STRING },
    town: { type: Sequelize.STRING },
    website: { type: Sequelize.STRING }
  }, { paranoid: true })
}

module.exports = { resorts }
