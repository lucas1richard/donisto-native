// import { LOGOUT } from 'containers/Login/constants';
import combinedReducers from './reducers';
const rootReducer = (state, action) => {
    // let newState = state;
    // if (action.type === LOGOUT) {
    //   newState = undefined;
    // }
    return combinedReducers(state, action);
};
export default rootReducer;
//# sourceMappingURL=rootReducer.js.map