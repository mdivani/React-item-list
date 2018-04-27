export default (items) => {
    items.sort((itemA, itemB) => {
        const nameA = itemA.name.toUpperCase();
        const nameB = itemB.name.toUpperCase();
        return nameA < nameB ? -1 : 1;
    });
    return items;
}