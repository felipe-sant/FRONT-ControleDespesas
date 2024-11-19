import ExpenseType from "../types/ExpensesType";
import MessageType from "../types/MessageType";

async function post(url: string, body: ExpenseType): Promise<MessageType> {
    delete body._id;
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    });
    const data = await response.json() as MessageType;
    return data;
}

export default post;