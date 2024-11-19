import ExpenseType from "../types/ExpensesType";
import MessageType from "../types/MessageType";

async function get(url: string, body?: {_id: string | undefined}): Promise<ExpenseType[] | MessageType> {
    if (body) url = `${url}/${body._id}`;
    const response = await fetch(url);
    const data = await response.json() as ExpenseType[] | MessageType; 
    return data;
}

export default get;