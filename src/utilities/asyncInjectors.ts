/**
 * @module utilities/asyncInjectors
 */

import conformsTo from 'lodash/conformsTo';
import isEmpty from 'lodash/isEmpty';
import isFunction from 'lodash/isFunction';
import isObject from 'lodash/isObject';
import invariant from 'invariant';
import warning from 'warning';

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
  return {
    injectSagas: injectAsyncSagas(store, true)
  };
}
