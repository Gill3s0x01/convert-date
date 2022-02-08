import assert from 'assert'
const date = new Date('2022-02-07 00:00:00')

// toLocaleDateString
const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}
{
  const actual = date.toLocaleDateString('pt-br', options)
  const expected = '07 de fevereiro de 2022'
  // assert.equal(actual, expected)
}
{
  const actual = date.toLocaleDateString('pt-br', {
    ...options,
    month: 'numeric',
  })
  const expected = '07/02/2022'
  console.log(actual)
  assert.equal(actual, expected)
}
