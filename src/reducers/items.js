export default (state = [], actions) => {
    switch(actions.type) {
        case 'ADD_ITEM':
            return [actions.item, ...state];
        default:
            return state;
    }
}