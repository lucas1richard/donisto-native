import { createContact } from "containers/Registration/actions";
import { connect } from "react-redux";
export const mapDispatchToProps = (dispatch) => ({
    createContact: () => {
        dispatch(createContact());
    }
});
export default connect(undefined, mapDispatchToProps);
//# sourceMappingURL=mapToProps.js.map