import { createContact } from "containers/Registration/actions";
import { Dispatch } from "redux";
import { connect } from "react-redux";

export const mapDispatchToProps = (dispatch: Dispatch) => ({
  createContact: () => {
    dispatch(createContact());
  }
});

export default connect(undefined, mapDispatchToProps);
