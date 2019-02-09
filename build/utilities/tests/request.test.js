import * as cookie from 'react-cookie';
import MockAdapter from 'axios-mock-adapter';
import request, { setOutgoingHeaders, setIncomingHeaders, handleRequestError } from '../request';
describe('request client', () => {
    const mock = new MockAdapter(request);
    beforeEach(() => {
        mock.reset();
        jest.resetAllMocks();
    });
    it('should have a base url be development by default', () => {
        expect(request.defaults.baseURL).toEqual('https://apidev.testforward.com');
    });
    // it('should have a base url be production if __PROD_API__ exists', () => {
    //   global.__PROD_API__ = 'https://api.prod.co';
    //   expect(request.defaults.baseURL).toEqual('https://api.prod.co');
    // });
    it('respond 200 on get', () => {
        mock.onGet('/test').reply(() => [200, {
                data: [],
                status: 200
            }]);
        request.get('/test').then((res) => {
            expect(res.data.data).toEqual([]);
        }).catch((err) => err);
    });
});
describe('setOutgoingHeaders function', () => {
    let config;
    let mock;
    beforeEach(function () {
        config = {
            headers: {}
        };
        mock = new MockAdapter(request);
        jest.resetAllMocks();
    });
    it('should return a config object', () => {
        expect(setOutgoingHeaders(config)).toEqual(config);
    });
    it('should not set headers if token is not present', () => {
        expect(setOutgoingHeaders(config).headers.Authorization).toEqual(undefined);
    });
    it('should set headers if token is present', () => {
        cookie.default.load = jest.fn(() => 'testToken');
        expect(setOutgoingHeaders(config).headers.Authorization).toEqual('testToken');
    });
    it('should stringify the data if its present', () => {
        expect(setOutgoingHeaders(config).transformRequest[0]({ data: {} })).toEqual(JSON.stringify({}));
    });
    it('should not have Authorization by default', () => {
        cookie.default.load.mockReset();
        mock.onGet('/secured').reply((instanceConfig) => {
            expect(instanceConfig.headers.Authorization).toEqual(undefined);
            return [200, {}];
        });
        request.get('/secured').then((res) => {
            expect(res.status).toEqual(200);
        }).catch((err) => err);
    });
    it('should have Authorization header if token exists', () => {
        mock.restore();
        mock.onGet('/secured').reply((instanceConfig) => {
            expect(instanceConfig.headers.Authorization).toEqual('testToken');
            return [200, {}];
        });
        request.get('/secured').then((res) => {
            expect(res.status).toEqual(200);
        }).catch((err) => err);
    });
});
describe('setIncomingHeaders', () => {
    let response;
    beforeEach(function () {
        response = {
            data: {},
            status: 200,
            headers: {}
        };
        jest.resetAllMocks();
    });
    it('should save token if authorization header exists', () => {
        response.headers.authorization = '1234';
        cookie.default.save = jest.fn();
        setIncomingHeaders(response);
        expect(cookie.default.save.mock.calls.length).toEqual(1);
    });
    it('should save uuid if uuid header exists', () => {
        response.headers.uuid = '1234';
        cookie.default.save = jest.fn();
        setIncomingHeaders(response);
        expect(cookie.default.save.mock.calls.length).toEqual(1);
    });
    it('should return data and status from response', () => {
        response.data = { test: 'data' };
        response.status = 200;
        expect(setIncomingHeaders(response)).toEqual({
            data: {
                test: 'data'
            },
            status: 200
        });
    });
});
describe('handleRequestError', () => {
    it('should return a rejected promise', () => {
        const testError = {
            response: {
                error: 'something went wrong'
            }
        };
        handleRequestError(testError).catch((err) => {
            expect(err).toEqual(testError.response);
        });
    });
});
//# sourceMappingURL=request.test.js.map