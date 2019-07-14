import { Dispatch } from "redux";
import { registerOrgAction } from "containers/Organization/actions";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch: Dispatch) => ({
  registerNewOrg: () => dispatch(registerOrgAction.Default())
});

export default connect(undefined, mapDispatchToProps);
