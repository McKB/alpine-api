const Sequelize = require('sequelize')
const config = require('../configs/sequelize')
const { chairlifts } = require('./chairlifts.model')
const { resorts } = require('./resorts.model')
const { stats } = require('./stats.model')

const environment = process.env.NODE_ENV || 'development'
const { username, password, database, host, dialect } = config[environment] //eslint-disable-line

const connection = new Sequelize(database, username, password, {
  host: host,
  dialect: dialect
})

const Resorts = resorts(connection, Sequelize)
const Chairlifts = chairlifts(connection, Sequelize, Resorts)
const Stats = stats(connection, Sequelize, Resorts)

Resorts.hasMany(Chairlifts)
Chairlifts.belongsTo(Resorts)

Resorts.hasOne(Stats)
Stats.belongsTo(Resorts)

module.exports = {
  Chairlifts,
  Resorts,
  Stats,
  Op: Sequelize.Op
}
