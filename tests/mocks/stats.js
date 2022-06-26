const statsList = [
  {
    resortId: 1,
    trails: 8,
    acres: 26,
    verticalDrop: 450,
    highestElevation: 1250
  },
  {
    resortId: 2,
    trails: 2,
    acres: 5,
    verticalDrop: 200,
    highestElevation: 700
  },
  {
    resortId: 3,
    trails: 71,
    acres: 300,
    verticalDrop: 1704,
    highestElevation: 3150
  }
]

const statsA = {
  resortId: 13,
  trails: 53,
  acres: 115,
  verticalDrop: 2037,
  highestElevation: 3637,
  resorts: [{
    resortName: 'Mad River Glen',
    town: 'Waitsfield',
    website: 'www.madriverglen.com'
  }]
}

const statsB = {
  resortId: 20,
  trails: 20,
  acres: 1200,
  verticalDrop: 1200,
  highestElevation: 1200
}

const statsC = {
  trails: 20
}

const statsD = {
  resortId: 20,
  trails: 20,
  acres: 0,
  verticalDrop: 0,
  highestElevation: 0
}

const incompleteStats = {
  trails: 120,
  acres: 1200,
  verticalDrop: 1200,
  highestElevation: 1200
}

const invalidStats = {
  trails: 'not a number - invalid data'
}



module.exports = {
  statsList, statsA, statsB, statsC, statsD, incompleteStats, invalidStats
}
