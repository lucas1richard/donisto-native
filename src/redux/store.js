/**
 * REDUX STORE CONFIG
 */

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
// import { composeWithDevTools } from 'remote-redux-devtools';
import { getAsyncInjectors } from '../utilities/asyncInjectors';
// import { resetTimer } from 'utilities/idleTimeout';
// import sentrybreadcrumbs from './middlewares/sentrybreadcrumbs';
import rootSaga from './rootSaga';
import { initialState } from './reducers';
import rootReducer from './rootReducer';

const reduxlogger = createLogger({
  // stateTransformer: (state) => state.toJS(),
  collapsed: (getState, action, logEntry) => !logEntry.error
});

const sagaMiddleware = createSagaMiddleware();

/** Reset the logout timer whenever a redux action goes through */
const timerMiddleWare = () => (next) => (action) => {
  // resetTimer();
  // logger.log(state);
  next(action);
};

export default function configureStore() {
  /** Add saga middleware */
  const middlewares = [
    sagaMiddleware,
    timerMiddleWare
    // sentrybreadcrumbs
  ];

  if (__DEV__) {
    middlewares.push(reduxlogger);
  }

  /** composeWithDevTools only runs when process.env.NODE_ENV === 'development' */
  // const composeEnhancers = composeWithDevTools({ realtime: true });

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares)
  );

  /** Async reducer registry */
  store.asyncReducers = {};

  // Extensions
  store.runSaga = (saga) => {
    sagaMiddleware.run(saga);
  };

  const { injectSagas } = getAsyncInjectors(store);

  injectSagas(rootSaga);

  return {
    store
  };
}
