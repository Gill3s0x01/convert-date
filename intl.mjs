import assert from 'assert'
const date = new Date('2022-02-07 00:00:00')

// INTl
{
  const actual = new Intl.DateTimeFormat('pt-br').format(date)
  const expected = '07/02/2022'
  // console.log({ actual })
  assert.equal(actual, expected)
}
{
  const actual = new Intl.DateTimeFormat('pt-br', {
    dateStyle: 'full',
    timeStyle: 'long',
  }).format(date)
  console.log({ actual })
  const expected = 'segunda-feira, 7 de fevereiro de 2022 00:00:00 BRT'
  assert.equal(actual, expected)
}
