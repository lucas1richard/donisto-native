import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectForm from './selectors';
const mapStateToProps = createStructuredSelector({
    Form: makeSelectForm()
});
function mapDispatchToProps(dispatch) {
    return {
        dispatch
    };
}
export default connect(mapStateToProps, mapDispatchToProps);
//# sourceMappingURL=mapToProps.js.map