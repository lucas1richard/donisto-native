import axios from 'axios';
import logger from '../logger';
import setOutgoingHeaders from './setOutgoingHeaders';
import setIncomingHeaders from './setIncomingHeaders';
import handleRequestError from './handleRequestError';

// const baseURL = 'http://donisto.herokuapp.com/api';
const baseURL = 'http://192.168.0.9:3000/api';

let authorizationOutgoingHeaders: number;

const apiClient = axios.create({
  baseURL,
  timeout: 30000
});

apiClient.defaults.headers.post['Content-Type'] = 'application/json';
apiClient.defaults.headers.put['Content-Type'] = 'application/json';
apiClient.defaults.headers.common.fromApp = 'v1.0.0';

let buildNumber: string;

apiClient.defaults.headers.common.buildNumber = buildNumber;

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

export function setDefaultOutgoingHeaders(config: any) {
  logger.log(config, 'utilities/request.js - outgoingHeaders');
  return config;
}

apiClient.interceptors
  .request
  .use(setDefaultOutgoingHeaders, (err) => Promise.reject(err));

apiClient.interceptors
  .response
  .use(setIncomingHeaders, handleRequestError);

export function ejectAuthHeader() {
  if (authorizationOutgoingHeaders) {
    apiClient.interceptors.request.eject(authorizationOutgoingHeaders);
  }
}

export default apiClient;
