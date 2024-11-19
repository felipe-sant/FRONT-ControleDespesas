import ExpenseType from "../types/ExpensesType";
import MessageType from "../types/MessageType";

async function del(url: string, body: ExpenseType): Promise<MessageType> {
    url = `${url}/${body._id}`;
    const response = await fetch(url, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    });
    const data = await response.json() as MessageType;
    return data;
}

export default del;