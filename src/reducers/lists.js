export default (state = [], action) => {
    switch(action.type) {
        case 'ADD_LIST':
          console.log(action.list);
          return [action.list, ...state];
        case 'ADD_ITEM_TO_LIST':
          return state.map((list) => {
            if(list.name === action.list.name) {
                list.items.push(action.item);
            }
            return list;
          });
        case 'SET_LISTS':
          return action.lists;
        default: 
            return state;
    }
}