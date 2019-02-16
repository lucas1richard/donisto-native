import logger from "utilities/logger";

import { call } from 'redux-saga/effects';

function* defaultSaga() {
  try {
    yield call(logger.log, 'defaultSaga', 'donations - defaultSaga');
  } catch (err) {
    logger.error(err, 'donations - defaultSaga');
  }
}

export default defaultSaga;
