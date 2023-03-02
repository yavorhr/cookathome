
const baseUrl = 'http://localhost:3030/data/recipes'


export const getAll = () => {
    return fetch(baseUrl).then(resp => resp.json())
}