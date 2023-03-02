
const baseUrl = 'http://localhost:3030/data/articles'


export const getAll = () => {
    return fetch(baseUrl)
        .then(resp => resp.json())
}