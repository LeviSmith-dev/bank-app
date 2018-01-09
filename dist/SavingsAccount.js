"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Decorators_1 = require("./Decorators");
let SavingsAccount = class SavingsAccount {
    constructor() {
        this.balance = 10000;
        this.monthlyTransactions = 6;
        this.dateOpened = new Date();
    }
    withdrawMoney(amount, description, transactionOrigin) {
        let currentBalance = this.balance;
        this.accountType = 2;
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
                    this.success = true;
                    this.errorMessage = "";
                    this.resultBalance = this.balance -= amount;
                    this.transactionDate = new Date();
                    this.description = description;
                    this.monthlyTransactions--;
                    //  this.accountHistory
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
        // balance * .02 / 12
        //monthlyTransaction reset to 6
    }
};
SavingsAccount = __decorate([
    Decorators_1.displayClassName
], SavingsAccount);
exports.SavingsAccount = SavingsAccount;
//# sourceMappingURL=SavingsAccount.js.map