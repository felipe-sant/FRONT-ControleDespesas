import { useState } from "react"
import css from "../styles/pages/cadastroPage.module.css"
import redirect from "../utils/redirect"
import ExpenseType from "../types/ExpensesType"
import BackendConnection from "../database/BackendConnection"

export default function CadastroPage() {
    const [description, setDescription] = useState("")
    const [date, setDate] = useState("")
    const [amount, setAmount] = useState("")

    async function create() {
        if (description === "" || date === "" || amount === "") {
            alert("All fields are required")
            return
        }
        const expense: ExpenseType = {
            _id: undefined,
            description,
            date,
            amount: parseFloat(amount)
        }
        const response = await BackendConnection.postExpense(expense)
        alert(response.message)
    }

    return (
        <main>
            <h1>Register Expenses</h1>
            <div className={css.form}>
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
                <div className={css.buttons}>
                    <button className={css.cancel} onClick={() => redirect("/")}>CANCEL</button>
                    <button className={css.send} onClick={create}>CREATE</button>
                </div>
            </div>
        </main>
    )
}