import logger from "./logger";
import showToast from "components/Toast";

function errorHandler(err: any) {
  logger.error(err, 'submitBasicInfoSaga');
  if (err.data && err.data.validationError) {
    showToast({
      text: err.data.message
    });
  }
}

export default errorHandler;
