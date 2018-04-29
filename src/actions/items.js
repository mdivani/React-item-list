import database from '../firebase/firebase.js';

export const addItem = (item) => ({
    type: 'ADD_ITEM',
    item
});

export const startAddItem = (item) => {
    return (dispatch, getState) => {
        return database.ref('items').push(item).then((ref) => {
            dispatch(addItem({
                id: ref.key,
                ...item
            }));
        })
    }
}
