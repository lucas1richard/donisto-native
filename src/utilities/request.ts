// @flow

import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import logger from './logger';
// import appJSON from '../../app.json';

// const baseURL = 'http://donisto.herokuapp.com';
const baseURL = 'http://192.168.0.9:3000';
let authorizationOutgoingHeaders: number;

const apiClient = axios.create({
  baseURL,
  timeout: 30000
});

apiClient.defaults.headers.post['Content-Type'] = 'application/json';
apiClient.defaults.headers.put['Content-Type'] = 'application/json';
apiClient.defaults.headers.common.fromApp = 'v1.0.0';

let buildNumber: string;

// try {
//   buildNumber = appJSON.expo.ios.buildNumber;
// } catch (err) {
//   buildNumber = '0';
// }

apiClient.defaults.headers.common.buildNumber = buildNumber;

/**
 * Function to set outgoing headers
 */
export function setOutgoingHeaders(token: string, uuid: string) {
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

/**
 * **Add authentication headers to outgoing requests**
 */
export function manualSetOutgoingHeaders(token: string, uuid: string) {
  logger.log('Manually setting outgoing headers', 'request.js');
  if (!authorizationOutgoingHeaders) {
    authorizationOutgoingHeaders = apiClient.interceptors
      .request
      .use(setOutgoingHeaders(token, uuid), (err) => Promise.reject(err));
  }
  logger.log(authorizationOutgoingHeaders, 'request.ts#manualSetOutgoingHeaders');
  logger.log(apiClient.interceptors, 'request.ts#manualSetOutgoingHeaders');
}

interface ISetIncomingHeadersArgs extends AxiosResponse {
  data: any;
  headers: any;
  status: any;
  statusText: string;
  config: any;
  [x: string]: any;
}

/**
 * Set the token and uuid if they come in
 */
export function setIncomingHeaders({ data, headers, status, statusText, config }: ISetIncomingHeadersArgs) {
  logger.log({ data, headers, status, statusText, config }, 'utilities/request.js');
  return { data, status, headers, statusText, config };
}

export function setDefaultOutgoingHeaders(config: any) {
  logger.log(config, 'utilities/request.js - outgoingHeaders');
  return config;
}

apiClient.interceptors
      .request
      .use(setDefaultOutgoingHeaders, (err) => Promise.reject(err));

export function handleRequestError({ response, ...rest }: { response: any }) {
  let toSend = response;
  logger.error({ response, ...rest }, 'request.ts');
  if (toSend && toSend.data) {
    logger.warn(
      JSON.stringify(toSend.data).replace(/\\n/g, '').replace(/\\/g, ''),
      'utilities/request.js#handleRequestError'
    );
  }
  if (response && response.message && !response.data) {
    toSend = response.message;
  }
  logger.warn(toSend, 'utilities/request.js#handleRequestError');
  return Promise.reject(toSend);
}

apiClient.interceptors.response.use(setIncomingHeaders, handleRequestError);

export function ejectAuthHeader() {
  if (authorizationOutgoingHeaders) {
    apiClient.interceptors.request.eject(authorizationOutgoingHeaders);
  }
}

export default apiClient;
