export default (state = [], actions) => {
    switch(actions.type) {
        case 'ADD_ITEM':
            return [actions.item, ...state];
        case 'SET_ITEMS':
            return actions.items;
        default:
            return state;
    }
}