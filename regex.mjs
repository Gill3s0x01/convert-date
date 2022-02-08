import assert from 'assert'
const date = new Date('2022-02-07 00:00:00')

const regex = /^([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])/
console.log(regex.exec(date.toISOString()))
const [full, year, month, day] = regex.exec(date.toISOString())
const actual = `${day}-${month}-${year}`
const expected = '07/02/2022'
assert.equal(actual, expected)
