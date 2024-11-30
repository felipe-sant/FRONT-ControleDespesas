import ExpenseClass from "../model/ExpenseClass";

export default function ExpenseComponents(props: { expense: ExpenseClass }) {
    const expense = props.expense;

    return (
        <>
            <div>
                <h2>{expense.getFormattedDate()}</h2>
                <p>{expense.description}</p>
                <p>R$ {expense.amount.toFixed(2)}</p>
                <hr />
            </div>
        </>
    )
}