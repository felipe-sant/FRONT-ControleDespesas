async function get(url: string, id?: string) {
    if (id === undefined) id = ""
    const response = await fetch(`${url}/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    return response.json()
}

export default get