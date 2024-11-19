import ExpenseType from "../types/ExpensesType";
import MessageType from "../types/MessageType";

async function put(url: string, body: ExpenseType): Promise<MessageType> {
    url = `${url}/${body._id}`;
    const response = await fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    });
    const data = await response.json();
    return data;
}

export default put;