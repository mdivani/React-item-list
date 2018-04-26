export default (state = null, action) => {
    switch(action.type) {
        case 'SELECT_LIST':
            return action.list;
        default: 
            return state;
    }
}