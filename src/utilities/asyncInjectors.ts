/**
 * @module utilities/asyncInjectors
 */

import conformsTo from 'lodash/conformsTo';
import isEmpty from 'lodash/isEmpty';
import isFunction from 'lodash/isFunction';
import isObject from 'lodash/isObject';
// import isString from 'lodash/isString';
import invariant from 'invariant';
import warning from 'warning';
// import createReducer from 'reducers';

/**
 * Validate the shape of redux store
 */
export function checkStore(store: any) {
  const shape = {
    dispatch: isFunction,
    subscribe: isFunction,
    getState: isFunction,
    replaceReducer: isFunction,
    runSaga: isFunction,
    asyncReducers: isObject
  };
  invariant(
    conformsTo(store, shape),
    '(app/utilities...) asyncInjectors: Expected a valid redux store'
  );
}

/**
 * Inject an asynchronously loaded reducer
 */
// export function injectAsyncReducer(store: any, isValid: any) {
//   return function injectReducer(name: any, asyncReducer: any) {
//     if (!isValid) checkStore(store);

//     invariant(
//       isString(name) && !isEmpty(name) && isFunction(asyncReducer),
//       '(app/utilities...) injectAsyncReducer: Expected `asyncReducer` to be a reducer function'
//     );

//     if (Reflect.has(store.asyncReducers, name)) return;

//     store.asyncReducers[name] = asyncReducer; // eslint-disable-line no-param-reassign
//     store.replaceReducer(createReducer(store.asyncReducers));
//   };
// }

/**
 * Inject an asynchronously loaded saga
 */
export function injectAsyncSagas(store: any, isValid: any) {
  return function injectSagas(sagas: any) {
    if (!isValid) checkStore(store);

    invariant(
      Array.isArray(sagas),
      '(app/utilities...) injectAsyncSagas: Expected `sagas` to be an array of generator functions'
    );

    warning(
      !isEmpty(sagas),
      '(app/utilities...) injectAsyncSagas: Received an empty `sagas` array'
    );

    return sagas.map(store.runSaga);
  };
}

/**
 * Helper for creating injectors
 */
export function getAsyncInjectors(store: any) {
  // checkStore(store);

  return {
    // injectReducer: injectAsyncReducer(store, true),
    injectSagas: injectAsyncSagas(store, true)
  };
}
