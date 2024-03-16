const getFirstNames = list => {
  return list.map(eachPerson => eachPerson.firstName)
}
module.exports = getFirstNames
let getPeopleInCity = require('../names/index')
console.log(getPeopleInCity)
