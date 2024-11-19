class URL {
    static BaseURL = "http://localhost:3001"
    static ExpensiveURL = (): string => `${URL.BaseURL}/expenses`
}

export default URL;