import apiHelper from './request';
import logger from './logger';

type TValidMethods = 'get'|'post'|'put'|'delete';

export interface IApi {
  (method: TValidMethods, endpoint: string, ...rest: any): Promise<any>;
}

/**
 * Api
 */
const api: IApi = async function apiFn(method, endpoint, data, ...rest) {
  try {
    const response = await apiHelper.request({
      url: endpoint,
      method,
      data,
      ...rest
    });
    return response;
  } catch (error) {
    if (error && error.status === 403) {
      logger.warn('Your session has expired', 'api.ts');
    }
    throw error;
    }
};

/** Makes sure to use the same axios instance with correct headers */
export default api;
