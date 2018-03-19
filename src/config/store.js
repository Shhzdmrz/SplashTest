import { persistStore, persistCombineReducers } from 'redux-persist';
import { createStore, compose, applyMiddleware } from 'redux';
import storage from 'redux-persist/es/storage';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createReactNavigationReduxMiddleware  } from 'react-navigation-redux-helpers';

import { middleware } from '../config/reduxNav';
import rootReducers from '../reducers';

const middlewares = [];
middlewares.push(thunk);

middlewares.push(middleware);

if(__DEV__){
    middlewares.push(createLogger());
}

const config = {
    key: 'primary',
    storage,    
    whitelist: [ 'one' ],
    blacklist: [ 'nav' ]
}

const reducers = persistCombineReducers(
    config, 
    rootReducers
);

const enhancers = [
    applyMiddleware(...middlewares)
];

const initialState = {};

const store = createStore(
    reducers,
    initialState,
    compose(...enhancers)
);

const persisConfig = { enhancers };

const persistor = persistStore(store, persisConfig, () => { });

const configureStore = () => {
    return { persistor, store };
}

export default configureStore;