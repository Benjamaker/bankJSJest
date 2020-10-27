const Bank = require('../src/bank')

test('Bank has a balance', () => {
  let myBank = new Bank(0);
  expect(myBank.balance).toEqual(0);
});