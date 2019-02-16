import logger from "utilities/logger";

import { call } from 'redux-saga/effects';

function* defaultSaga() {
  try {
    yield call(logger.log, 'defaultSaga', 'messages - defaultSaga');
  } catch (err) {
    logger.error(err, 'messages - defaultSaga');
  }
}

export default defaultSaga;
