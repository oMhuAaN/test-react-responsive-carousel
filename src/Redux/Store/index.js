import { createStore, applyMiddleware, compose } from 'redux';
import Reducer from '../Reducer';
import Sagas from '../Sagas';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware)
);

const Store = createStore(
  Reducer,
  enhancer
);

sagaMiddleware.run(Sagas);

export default Store;