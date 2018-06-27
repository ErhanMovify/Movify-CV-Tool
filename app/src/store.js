import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1';
import storage from 'redux-persist/lib/storage';

import reducers from './reducers';

// Create persisting reducers
// They will handle re-hydrating the store from the values saved in local storage
const persistedReducer = persistReducer({
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel1,
}, reducers);

// Create our store from our reducers and middle-wares
const store = createStore(
  persistedReducer,
  {},
  compose(
    applyMiddleware(thunk),
    // eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

// Create a redux-persist persistor for our store
export const persistor = persistStore(store);

export default store;
