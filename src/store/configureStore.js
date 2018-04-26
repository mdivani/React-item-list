import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import itemReducer from '../reducers/items';
import listReducer from '../reducers/lists';
import selectedListReducer from '../reducers/selectedList';
import { loadState, saveState } from '../localStorage/localStorage';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedState = loadState();

export default () => {
  const store = createStore(
    combineReducers({
      items: itemReducer,
      lists: listReducer,
      selectedList: selectedListReducer
    }),
    persistedState,
    composeEnhancers(applyMiddleware(thunk))
  );

  store.subscribe(() => {
    saveState({
      items: store.getState().items,
      lists: store.getState().lists
    });
  })

  return store;
};
