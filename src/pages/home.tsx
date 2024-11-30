import { useEffect, useState } from "react"
import ExpenseClass from "../model/ExpenseClass"
import BackendConnection from "../database/BackendConnection"
import ExpenseComponents from "../components/ExpensesComponent"
import redirect from "../utils/redirect"

function Home() {
    const [expenses, setExpenses] = useState<ExpenseClass[]>([])

    async function getExpenses() {
        setExpenses(await BackendConnection.getExpenses())
    }

    useEffect(() => {
        getExpenses()
    }, [])

    return (
        <main>
            <h1>Hello world</h1>
            <button onClick={() => redirect("/cadastro")}>Criar Despeza</button>
            {expenses.length > 0 ? 
                expenses.map(expense => <ExpenseComponents key={expense._id} expense={expense} />) : 
                <p>Sem itens</p>
            }
        </main>
    )
}

export default Home