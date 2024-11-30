import URL from "../constants/URL";
import del from "../functions/del";
import get from "../functions/get";
import post from "../functions/post";
import put from "../functions/put";
import ExpenseClass from "../model/ExpenseClass";
import ExpenseType from "../types/ExpensesType";
import MessageType from "../types/MessageType";

export default class BackendConnection {
    static async getExpenses(): Promise<ExpenseClass[]> {
        try {
            const response = await get(URL.ExpensiveURL()) as ExpenseType[] | MessageType;
            if (response instanceof Array) {
                const expenses: ExpenseClass[] = []
                expenses.push(...response.map(expense => new ExpenseClass(expense)))
                return expenses
            } else {
                return [];
            }
        } catch (error) {
            return []
        }
    }

    static async postExpense(expense: ExpenseType): Promise<MessageType> {
        try {
            return await post(URL.ExpensiveURL(), expense) as MessageType
        } catch (error) {
            return { message: "Error" }
        }
    }

    static async putExpense(expense: ExpenseClass): Promise<MessageType> {
        try {
            if (expense._id === undefined) return { message: "Error" }
            return await put(URL.ExpensiveURL(), expense._id, expense) as MessageType
        } catch (error) {
            return { message: "Error" }
        }
    }

    static async deleteExpense(expense: ExpenseClass): Promise<MessageType> {
        try {
            if (expense._id === undefined) return { message: "Error" }
            return await del(URL.ExpensiveURL(), expense._id) as MessageType
        } catch (error) {
            return { message: "Error" }
        }
    }
}