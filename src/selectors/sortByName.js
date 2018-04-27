export default (items) => {
    const sortedItems = [].concat(items);
    sortedItems.sort((itemA, itemB) => {
        const nameA = itemA.name.toUpperCase();
        const nameB = itemB.name.toUpperCase();
        return nameA < nameB ? -1 : 1;
    });
    return sortedItems;
}