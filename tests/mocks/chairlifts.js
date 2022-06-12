const chairliftsList = [{
  liftType: 'Quad Chairlift',
  liftName: 'Canyonland Express',
  resortId: 16,
  shapeLength: 1511.08168757009
},
{
  liftType: 'Triple Chairlift',
  liftName: 'Morning Star Triple',
  resortId: 18,
  shapeLength: 742.132307888498
},
{
  liftType: 'Rope Tow',
  liftName: 'Small Rope Tow',
  resortId: 17,
  shapeLength: 122.518327576523
}
]

const liftsFor17 = [
  {
    id: 50,
    liftType: 'Rope Tow',
    liftName: 'North East Slopes Rope Tow',
    resortId: 17,
    shapeLength: 378.213470264782
  },
  {
    id: 89,
    liftType: 'T Bar',
    liftName: 'Northeast Slopes T Bar',
    resortId: 17,
    shapeLength: 421.554937933755
  },
  {
    id: 160,
    liftType: 'Rope Tow',
    liftName: 'Small Rope Tow',
    resortId: 17,
    shapeLength: 122.518327576523
  }
]

const liftA = {
  id: 40,
  liftType: 'Triple Chairlift',
  liftName: 'Black Ridge Triple',
  resortId: 18,
  shapeLength: 811.942986171511
}

const liftB = {
  liftType: 'Rope Tow',
  liftName: 'Bellows Falls Rope Tow',
  resortId: 2,
  shapeLength: 253.570015671698
}

const incompleteLift = {
  liftType: 'Quad Chairlift',
  liftName: 'Grand Summit Express',
  shapeLength: 2152.63170026774
}

module.exports = {
  chairliftsList, liftsFor17, liftA, liftB, incompleteLift
}
