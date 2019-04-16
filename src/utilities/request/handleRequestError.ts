import logger from 'utilities/logger';

export function handleRequestError({ response, ...rest }: { response: any }) {
  let toSend = response;
  logger.error({ response, ...rest }, 'request.ts');

  if (toSend && toSend.data) {
    logger.warn(
      JSON.stringify(toSend.data).replace(/\\n/g, '').replace(/\\/g, ''),
      'request.js#handleRequestError'
    );
  }
  if (response && response.message && !response.data) {
    toSend = response.message;
  }
  logger.warn(toSend, 'request.js#handleRequestError');
  return Promise.reject(toSend);
}

export default handleRequestError;