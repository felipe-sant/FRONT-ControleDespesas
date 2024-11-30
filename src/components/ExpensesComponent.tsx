import ExpenseClass from "../model/ExpenseClass";
import css from "../styles/components/expensesComponents.module.css"

export default function ExpenseComponents(props: { expense: ExpenseClass }) {
    const expense = props.expense;

    return (
        <>
            <div className={css.expense}>
                <h2>{expense.getFormattedDate()}</h2>
                <p className={css.description}>{expense.description}</p>
                <p>R$ {expense.amount.toFixed(2)}</p>
                <div className={css.button}>
                    <button className={css.edit}>Edit</button>
                    <button className={css.delete}>Delete</button>
                </div>
            </div>
        </>
    )
}