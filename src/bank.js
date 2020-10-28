class Bank {
  constructor(balance, accountName, transactions) {
    this.balance = 0;
    this.accountName = accountName;
    this.transactions = [];
  }

  deposit(amount) {
    const today = new Date();
    const transaction = {[today]: amount};
    this.transactions.push(transaction)
    console.log(this.transactions)
    return this.balance += amount;
  } 

  withdraw(amount) {
    return this.balance -= amount;
  }
  
}

module.exports = Bank;