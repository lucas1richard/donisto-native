import logger from 'utilities/logger';
import { AxiosResponse } from 'axios';

interface ISetIncomingHeadersArgs extends AxiosResponse {
  data: any;
  headers: any;
  status: any;
  statusText: string;
  config: any;
  [x: string]: any;
}

export function setIncomingHeaders(info: ISetIncomingHeadersArgs) {
  logger.log(info, 'utilities/request.js');
  return info;
}

export default setIncomingHeaders;
