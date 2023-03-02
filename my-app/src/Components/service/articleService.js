
const baseUrl = 'http://localhost:3030/data/articles'


export const getAll = () => {
    return fetch(baseUrl)
        .then(resp => resp.json())
}

export const sortByDate =  (articlesArray) => {
    function compare(a, b) {
        if (a.createdOn < b.createdOn) {
            return -1;
        }
        if (a.createdOn > b.createdOn) {
            return 1;
        }
        return 0;
    }

    return articlesArray.sort(compare).splice(0, 5);
}
