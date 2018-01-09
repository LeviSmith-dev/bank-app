import { Account } from "./Account";
import { Transaction } from "./Transaction";
import { AccountType } from "./AccountType";
import { TransactionOrigin} from "./TransactionOrigin";

export class RetirementAccount implements Account, Transaction {

    constructor() {
        this.dateOpened = new Date();
    }
    accountHolderName: string;
    accountHolderBirthDate: Date;
    balance: number = 100000;
    accountType: AccountType;
    accountHistory: Transaction[];
    success: boolean;
    resultBalance: number;
    amount: number;
    description: string;
    transactionDate: Date;
    errorMessage: string;
    dateOpened: Date;
    monthlyTransactions: number = 6;
    userAge: number = 64;
    earlyWithdrawal: number = (this.balance * .1);

    withdrawMoney(amount: number, description: string, transactionOrigin: TransactionOrigin): Transaction {

        let currentBalance = this.balance;
        this.accountType = 3;
        this.amount = amount;
        if(transactionOrigin == 1 || transactionOrigin == 2){
            if(this.monthlyTransactions >= 1){

                if(amount > currentBalance){
                    this.success = false;
                    this.errorMessage = "Cannot withdrawal more than the available balance.";
                    this.resultBalance = this.balance;
                    this.transactionDate = new Date();
                    this.description = description;
                }
                else {
                    if(this.userAge <= 65) {
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
            else{
                this.errorMessage = "Number of transactions exceeded federal monthly limit";
            }
        }
        else{
            this.amount = amount;
            if(amount > currentBalance){
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

    depositMoney(amount: number, description: string): Transaction {
        this.balance += amount;
        this.resultBalance = this.balance;
        this.success = true;
        this.description = description;
        this.errorMessage = "";
        this.transactionDate = new Date();

        return;
    }

    advanceDate(numberOfDays: number) {
        // balance * .03 / 12
        //monthlyTransactions reset to 6
    }

}