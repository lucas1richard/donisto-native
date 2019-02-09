import React from 'react';
import { View, Text } from 'react-native';
import { h1, h2 } from 'styles/Headings';
import Button from 'components/Button';
import Form from './components/Form';
import mapToProps from './mapToProps';
import Loader from 'components/Loader';
import logger from 'utilities/logger';
class Login extends React.Component {
    render() {
        const { login, submitting } = this.props;
        logger.log(this.props, 'Login');
        return (React.createElement(View, { style: { height: '100%', justifyContent: 'space-between', paddingHorizontal: 12, paddingVertical: 12 } },
            React.createElement(View, null,
                React.createElement(Text, { style: h1() }, "Account Login"),
                React.createElement(Text, { style: h2() }, "Enter Your Credentials Below")),
            React.createElement(View, null,
                React.createElement(Form, { onSubmit: () => undefined }),
                React.createElement(Text, { style: { color: 'gray', textAlign: 'center' } }, "I don't remember my password")),
            React.createElement(View, null, submitting ? (React.createElement(Loader, null)) : (React.createElement(Button, { color: "primary", onPress: login, title: "Yay" })))));
    }
}
export default mapToProps(Login);
//# sourceMappingURL=index.js.map