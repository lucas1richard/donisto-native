import { Dispatch } from "redux";
import { updateContactAction } from "containers/Contact/actions";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { makeSelectContact } from "containers/Contact/selectors";

const mapStateToProps = createStructuredSelector({
  contact: makeSelectContact()
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  updateContact: () => dispatch(updateContactAction())
});

const mapToProps = connect(mapStateToProps, mapDispatchToProps);

export default mapToProps;
