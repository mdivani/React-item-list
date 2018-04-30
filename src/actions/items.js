import database from '../firebase/firebase.js';

export const addItem = (item) => ({
    type: 'ADD_ITEM',
    item
});

export const startAddItem = (item) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/items`).push(item).then((ref) => {
            dispatch(addItem({
                id: ref.key,
                ...item
            }));
        })
    }
}

export const setItems = (items) => ({
    type: 'SET_ITEMS',
    items
})

export const startSetItems = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/items`).once('value').then((snap) => {
            const items = [];
            snap.forEach((ref) => {
                items.push({
                    id: ref.key,
                    ...ref.val()
                });
            });
            dispatch(setItems(items));
        });
    }
}
