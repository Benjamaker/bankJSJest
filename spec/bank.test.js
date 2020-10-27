const Bank = require('../src/bank')

describe('Bank', () => {
  
  let myBank;
  
  beforeEach(() => {
    myBank = new Bank(0, "Benjamaker");
  });
  
  it('Bank has a balance', () => { 
    expect(myBank.balance).toEqual(0);
  });

  it('Bank has an account name', () => { 
    expect(myBank.accountName).toEqual("Benjamaker");
  });

  it('Client can make a deposit', () => {
    myBank.deposit(1000);
    expect(myBank.balance).toEqual(1000);
  });

  it('Client can make a withdrawal', () => {
    myBank.deposit(1000);
    myBank.withdraw(500);
    expect(myBank.balance).toEqual(500);
  });

});  