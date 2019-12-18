class BankAccount {
  constructor(
    first_name,
    last_name,
    account_status,
    account_number,
    account_balance,
    withdraw_method
  ) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.account_status = account_status;
    this.account_number = account_number;
    this.account_balance = account_balance;
    this.withdraw_method = withdraw_method;
  }

  getBalance() {
    var balances = this.account_balance;
    return balances;
  }

  setopen() {
    if (this.account_status !== null) {
      this.account_status = "active";

      return "account has been activated";
    } else {
      return "account already exists";
    }
  }

  getdeposit() {
    var deposits = this.account_balance + 300;
    return deposits;
  }

  getwithdraw() {
    var newBalance = this.account_balance - 200;
    return newBalance;
  }

  setclose() {
    this.status = "closed";

    return "account is now closed";
  }
}
let BankAccount1 = new BankAccount(
  "diana",
  "kukundakwe",
  "active",
  "211178886",
  556.78,
  "mobilephone"
);
BankAccount1.setopen();
BankAccount1.getdeposit();
BankAccount1.getBalance();
BankAccount1.getwithdraw();
BankAccount1.setclose();

// console.log(`the current status is ${BankAccount1.getBalance()}`);
// console.log(`the current balance is ${BankAccount1.getBalance()}`);
// console.log(`the current balance is ${BankAccount1.getBalance()}`);
// console.log(`the current balance is ${BankAccount1.getBalance()}`);
// console.log(`the current balance is ${BankAccount1.getBalance()}`);
// console.log(`the current balance is ${BankAccount1.getBalance()}`);

// module.exports = BankAccount;
