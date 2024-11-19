import URL from "../constants/URL"

function Home() {
    async function testar() {
        const teste = URL.ExpensiveURL()
        console.log(teste)
    } 

    return (
        <main>
            <h1>Hello world</h1>
            <button onClick={testar}>tstar</button>
        </main>
    )
}

export default Home