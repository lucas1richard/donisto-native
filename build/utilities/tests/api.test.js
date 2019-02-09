import { call, put } from 'redux-saga/effects';
import { logout } from 'containers/Login/actions';
import api from '../api';
import request from '../request';
describe('apiHelper test', () => {
    const generator = (method, endpoint, ...data) => api(method, endpoint, ...data);
    it('tests for a succesful response', () => {
        const helperGen = generator('get', '/test-endpoint');
        const callApiDescriptor = helperGen.next().value;
        expect(callApiDescriptor).toEqual(call(request.get, '/test-endpoint'));
        helperGen.next();
    });
    it('handles 403 status by dispatching logout', () => {
        const helperGen = generator('get', '/test-endpoint');
        const error = new Error('FORBIDDEN');
        helperGen.next();
        error.response = {
            status: 403
        };
        const putLogoutDescriptor = helperGen.throw(error.response).value;
        expect(putLogoutDescriptor).toEqual(put(logout('Your session has expired')));
    });
    it('throws errors to continue up the chain', () => {
        const helperGen = generator('get', '/test-endpoint');
        const error = new Error('FORBIDDEN');
        error.response = {
            status: 400
        };
        helperGen.next();
        expect(() => helperGen.throw(error)).toThrow(error);
    });
});
//# sourceMappingURL=api.test.js.map