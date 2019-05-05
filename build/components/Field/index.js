import * as React from 'react';
import { Field } from 'redux-form';
class MyField extends React.Component {
    render() {
        return (React.createElement(Field, Object.assign({}, this.props)));
    }
}
export default MyField;
//# sourceMappingURL=index.js.map