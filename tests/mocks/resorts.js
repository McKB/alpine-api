const resortsList = [
  {
    resortName: 'Stowe',
    town: 'Stowe',
    website: 'www.stowe.com'
  },
  {
    resortName: 'Stratton Mountain',
    town: 'Stratton',
    website: 'www.stratton.com'
  },
  {
    resortName: 'Sugarbush',
    town: 'Warren',
    website: 'www.sugarbush.com'
  }
]

const resortA = {
  id: 23,
  resortName: 'Stowe',
  town: 'Stowe',
  website: 'www.stowe.com',
  stats: {
    resortId: 23,
    trails: 53,
    acres: 115,
    verticalDrop: 2037,
    highestElevation: 3637
  }
}

const resortB = {
  resortName: 'New Resort',
  town: 'New town',
  website: 'www.newresort.com'
}

const incompleteResort = {
  resortName: 'incomplete resort object',
  website: 'www.ihavenotown.com'
}


module.exports = { resortsList, resortA, resortB, incompleteResort }
