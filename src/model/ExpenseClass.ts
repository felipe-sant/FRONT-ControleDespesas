import ExpenseType from "../types/ExpensesType";
import dateToString from "../utils/dateToString";

export default class ExpenseClass {
    public _id: string | undefined;
    public description: string;
    public amount: number;
    public date: Date;
    
    constructor(expense: ExpenseType) {
        this._id = expense._id;
        (expense.description) ? this.description = expense.description : this.description = "";
        (expense.amount) ? this.amount = expense.amount : this.amount = 0;
        (expense.date) ? this.date = new Date(expense.date) : this.date = new Date();
    }

    public getFormattedDate(): string {
        return dateToString(this.date);
    }
}