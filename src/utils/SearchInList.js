export const SearchInList = (searchWord, list) => {
    let searchResult = list.filter(o =>
        Object.keys(o).some(k => o.name.includes(searchWord))
    );
    return searchResult
}

