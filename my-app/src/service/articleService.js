
const baseUrl = 'http://localhost:3030/data/articles'

export const sortByDate = (articlesArray) => {

    let result = [];
    result = [...articlesArray];

    function compare(a, b) {
        if (a.createdOn < b.createdOn) {
            return -1;
        }
        if (a.createdOn > b.createdOn) {
            return 1;
        }
        return 0;
    }
    return result.sort(compare).splice(0, 5);
}
