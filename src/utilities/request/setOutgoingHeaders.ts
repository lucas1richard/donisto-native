import logger from 'utilities/logger';
import { AxiosRequestConfig } from 'axios';

/**
 * Function to set outgoing headers
 */
function setOutgoingHeaders(token: string, uuid: string) {
  logger.log({ token, uuid }, 'request.js');
  return function set(config: AxiosRequestConfig) {
    if (token && uuid) {
      config.headers.Authorization = decodeURIComponent(token);
      config.headers.uuid = uuid;
    } else {
      logger.warn('No token and/or uuid', 'utilities/request.js');
    }
    logger.log({
      headers: config.headers,
      url: config.url,
      method: config.method,
      data: config.data
    }, 'request - outgoingheaders');
    return config;
  };
}

export default setOutgoingHeaders;