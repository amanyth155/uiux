"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFirstElement = exports.BankAccount = void 0;

// -- BankAccount Class ---
class BankAccount {
    constructor(initialBalance = 0) {
        this.balance = initialBalance;
    }

    deposit(amount) {
        if (amount <= 0) {
            console.log("Deposit amount must be greater than 0.");
            return;
        }
        this.balance += amount;
        console.log(`Deposited: $${amount}`);
    }

    getBalance() {
        return this.balance;
    }
}
exports.BankAccount = BankAccount;

// - Get First Element ---
function getFirstElement(arr) {
    return arr.length > 0 ? arr[0] : undefined;
}
exports.getFirstElement = getFirstElement;

// --- Test.....
const account = new BankAccount();
account.deposit(500);
console.log("Balance:", account.getBalance());

const nums = [1, 2, 3];
const words = ["alpha", "beta", "gamma"];
console.log("First number:", getFirstElement(nums));
console.log("First word:", getFirstElement(words));
