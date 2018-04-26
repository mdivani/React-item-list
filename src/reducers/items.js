export default (state = [], actions) => {
    switch(actions.type) {
        case 'ADD_ITEM':
            return [...state, actions.item];
        default:
            return state;
    }
}