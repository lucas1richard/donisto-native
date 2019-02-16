import logger from "utilities/logger";

import { call } from 'redux-saga/effects';

function* defaultSaga() {
  try {
    yield call(logger.log, 'defaultSaga', 'discover - defaultSaga');
  } catch (err) {
    logger.error(err, 'discover - defaultSaga');
  }
}

export default defaultSaga;
