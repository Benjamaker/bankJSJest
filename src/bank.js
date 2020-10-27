class Bank {
  constructor(balance, accountName) {
    this.balance = 0
    this.accountName = accountName
  }

deposit(amount) {
  return this.balance += amount;
} 
  
}

module.exports = Bank;