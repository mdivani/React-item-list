export const addList = (list) => ({
    type: 'ADD_LIST',
    list
});

export const addItemToList = (list, item) => ({
    type: 'ADD_ITEM_TO_LIST',
    list,
    item
});
