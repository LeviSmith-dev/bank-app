"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RetirementAccount {
    constructor() {
        this.balance = 100000;
        this.monthlyTransactions = 6;
        this.userAge = 64;
        this.earlyWithdrawal = (this.balance * .1);
        this.dateOpened = new Date();
    }
    withdrawMoney(amount, description, transactionOrigin) {
        let currentBalance = this.balance;
        this.accountType = 3;
        this.amount = amount;
        if (transactionOrigin == 1 || transactionOrigin == 2) {
            if (this.monthlyTransactions >= 1) {
                if (amount > currentBalance) {
                    this.success = false;
                    this.errorMessage = "Cannot withdrawal more than the available balance.";
                    this.resultBalance = this.balance;
                    this.transactionDate = new Date();
                    this.description = description;
                }
                else {
                    if (this.userAge <= 65) {
                        this.balance -= this.earlyWithdrawal;
                        this.success = true;
                        this.errorMessage = "";
                        this.resultBalance = this.balance -= amount;
                        this.transactionDate = new Date();
                        this.description = description;
                        this.monthlyTransactions--;
                        //  this.accountHistory
                    }
                    else {
                        this.success = true;
                        this.errorMessage = "";
                        this.resultBalance = this.balance -= amount;
                        this.transactionDate = new Date();
                        this.description = description;
                        this.monthlyTransactions--;
                        //  this.accountHistory
                    }
                }
            }
            else {
                this.errorMessage = "Number of transactions exceeded federal monthly limit";
            }
        }
        else {
            this.amount = amount;
            if (amount > currentBalance) {
                this.success = false;
                this.errorMessage = "Cannot withdrawal more than the available balance.";
                this.resultBalance = this.balance;
                this.transactionDate = new Date();
                this.description = description;
            }
            else {
                this.success = true;
                this.errorMessage = "";
                this.resultBalance = this.balance -= amount;
                this.transactionDate = new Date();
                this.description = description;
                //  this.accountHistory
            }
        }
        return;
    }
    depositMoney(amount, description) {
        this.balance += amount;
        this.resultBalance = this.balance;
        this.success = true;
        this.description = description;
        this.errorMessage = "";
        this.transactionDate = new Date();
        return;
    }
    advanceDate(numberOfDays) {
        // balance * .03 / 12
        //monthlyTransactions reset to 6
    }
}
exports.RetirementAccount = RetirementAccount;
//# sourceMappingURL=RetirementAccount.js.map