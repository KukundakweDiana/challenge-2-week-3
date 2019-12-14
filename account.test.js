const BankAccount = require("/.");
describe("these tests are designed to make sure that an account works as it should", () => {
  it("returns account opened if status is active", () => {
    expect(BankAccount.open()).toBe("account activated");
  });

  it("returns balance", () => {
    expect(BankAccount.getBalance()).toBe(556.78);
  });

  it("returns balance after deposit if account status is activated", () => {
    expect(BankAccount.getdeposit(300)).toBe(856.78);
  });

  it("returns balance after withdrawal", () => {
    expect(BankAccount.getwithdraw(200)).toBe(656.78);
  });

  it("returns closed account", () => {
    expect(BankAccount.close()).toBe("account is now closed!");
  });
});
