
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

export const urlMappingDataArticles = [
    {
        nutrition:
            ['/catalog-articles/healthy-snacks',
                '/catalog-articles/all-about-sugar',
                '/catalog-articles/is-alcohol-really-bad',
                '/catalog-articles/learn-about-portions-size']
    }, {
        'Workouts meals':
            ['/catalog-articles/what-to-eat-before-and-after-training',
                '/catalog-articles/how-much-proteins-a-day',
                '/catalog-articles/gain-weight-the-right-way',
                '/catalog-articles/breakfasts-for-champions']
    }, {
        'Diets':
            ['/catalog-articles/carnivore-diet',
                '/catalog-articles/veganism',
                '/catalog-articles/fish',
                '/catalog-articles/paleo']
    }]
