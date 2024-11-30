import { useState } from "react";
import ExpenseClass from "../model/ExpenseClass";
import css from "../styles/components/expensesModalComponents.module.css"
import ExpenseType from "../types/ExpensesType";
import BackendConnection from "../database/BackendConnection";

export default function ExpenseModalComponent(props: { expense: ExpenseClass, onClose: () => void }) {
    const { expense, onClose } = props;
    const [description, setDescription] = useState(expense.description);
    const [date, setDate] = useState(expense.date.toISOString().split("T")[0]);
    const [amount, setAmount] = useState(expense.amount.toString());

    async function save() {
        if (description === "" || date === "" || amount === "") {
            alert("Please fill all the required fields")
            return
        }
        const newExpenseType: ExpenseType = {
            _id: expense._id,
            description,
            date: date,
            amount: parseFloat(amount)
        }
        await BackendConnection.putExpense(new ExpenseClass(newExpenseType))
        window.location.reload()
    }

    return (
        <>
            <div className={css.background} onClick={onClose} />
            <div className={css.modal}>
                <div className={css.modal_header}>
                    <h2>Expense Edit</h2>
                </div>
                <div className={css.modal_body}>
                    <div className={css.input + " " + css.required}>
                        <label>Description</label>
                        <textarea
                            cols={30}
                            rows={10}
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                        />
                    </div>
                    <div className={css.input + " " + css.required}>
                        <label>Date</label>
                        <input
                            type="date"
                            value={date}
                            onChange={e => setDate(e.target.value)}
                        />
                    </div>
                    <div className={css.input + " " + css.required}>
                        <label>Amount</label>
                        <input
                            type="number"
                            value={amount}
                            onChange={e => setAmount(e.target.value)}
                        />
                    </div>
                </div>
                <div className={css.modal_footer}>
                    <button className={css.cancel} onClick={onClose}>Cancel</button>
                    <button className={css.save} onClick={save}>Save</button>
                </div>
            </div>
        </>
    )
}