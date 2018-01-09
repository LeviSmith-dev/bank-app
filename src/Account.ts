import { Transaction } from "./Transaction";
import { TransactionOrigin} from "./TransactionOrigin";
import { AccountType } from "./AccountType";

export interface Account {
    accountHolderName: string;
    accountHolderBirthDate: Date;
    balance: number;
    accountHistory : Transaction[];
    accountType: AccountType;
    withdrawMoney(amount: number, description: string, transactionOrigin: TransactionOrigin) : Transaction;
    depositMoney(amount: number, description: string) : Transaction;
    advanceDate(numberOfDays: number);
}