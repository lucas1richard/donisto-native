var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import apiHelper from './request';
import logger from './logger';
/**
 * Api
 */
const api = function apiFn(method, endpoint, data, ...rest) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield apiHelper.request(Object.assign({ url: endpoint, method,
                data }, rest));
            return response;
        }
        catch (error) {
            if (error && error.status === 403) {
                logger.warn('Your session has expired', 'api.ts');
            }
            throw error;
        }
    });
};
/** Makes sure to use the same axios instance with correct headers */
export default api;
//# sourceMappingURL=api.js.map