import database from '../firebase/firebase.js';

export const addList = (list) => ({
    type: 'ADD_LIST',
    list
});

export const startAddList = (list) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/lists`).push(list).then((snap) => {
            dispatch(addList({
                id: snap.key,
                ...list
            }));
        });
    }
}

export const addItemToList = (list, item) => ({
    type: 'ADD_ITEM_TO_LIST',
    list,
    item
});

export const startAddItemToLIst = (list, item) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/lists/${list.id}/items`).push(item).then((snap) => {
            dispatch(addItemToList(list, item));
        });
    }
};

export const setLists = (lists) => ({
    type: 'SET_LISTS',
    lists
});

export const startSetLists = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/lists`).once('value').then((snap) => {
            const lists = [];
            snap.forEach((snapChild) => {
                lists.push({
                    id: snapChild.key,
                    ...snapChild.val()
                });
            });
            lists.forEach((list) => {
                const items = [];
                const snapItems = list.items;
                if(snapItems) {
                    for(const property in snapItems) {
                        if(snapItems.hasOwnProperty(property)) {
                            items.push(snapItems[property]);
                        }
                    }
                }
                list.items = items;
            });
            dispatch(setLists(lists));
        })
    }
}