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
    this.balances = 0;
    this.newbalance = 0;
    this.deposited = 0;
  }

  // your code here

  getBalance() {
    var balances = this.account_balance;
    return `(${this.balances})`;
    // your code here
  }

  setopen() {
    if (this.account_status !== null) {
      this.account_status = "active";

      return "account has been activated";
    } else {
      return "account already exists";
    }

    // your code here
  }

  getdeposit() {
    var deposits = this.account_balance + 300;
    return `(${this.deposits})`;
    // your code here
  }

  getwithdraw() {
    var newBalance = this.account_balance - 200;
    return `(${this.newBalance})`;
    // your code here
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
BankAccount1.getBalance();

console.log(`the current balance is ${BankAccount1.getBalance()}`);
// module.exports = BankAccount;
