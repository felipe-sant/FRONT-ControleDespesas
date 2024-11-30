import { useEffect, useState } from "react"
import ExpenseClass from "../model/ExpenseClass"
import BackendConnection from "../database/BackendConnection"
import ExpenseComponents from "../components/ExpensesComponent"
import redirect from "../utils/redirect"
import css from "../styles/pages/home.module.css"

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
            <button className={css.button} onClick={() => redirect("/cadastro")}>Criar Despeza</button>
            {expenses.length > 0 ? 
                expenses.map(expense => <ExpenseComponents key={expense._id} expense={expense} />) : 
                <div className={css.semItem}>
                    <h2>Não há despezas</h2>
                    <p>Clique no botão acima para criar uma.</p>
                </div>
            }
        </main>
    )
}

export default Home