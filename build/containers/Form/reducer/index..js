import FormConstants from '../constants';
const initialState = {};
function formReducer(state = initialState, action) {
    switch (action.type) {
        case FormConstants.DEFAULT_ACTION:
            return state;
        default:
            return state;
    }
}
export default formReducer;
//# sourceMappingURL=index..js.map