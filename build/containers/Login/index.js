import React from 'react';
import { View, ImageBackground } from 'react-native';
import Button from 'components/Button';
import Form from './components/Form';
import mapToProps from './mapToProps';
import Loader from 'components/Loader';
import logger from 'utilities/logger';
import FloatingHeader from 'components/FloatingHeader';
import H1 from 'components/H1';
import H2 from 'components/H2';
import Txt from 'components/Txt';
import JoinNowLink from 'components/JoinNowLink';
const charityImg = require('../../../assets/onboarding-bg.png');
class Login extends React.Component {
    render() {
        const { login, submitting } = this.props;
        logger.log(this.props, 'Login');
        return (React.createElement(ImageBackground, { source: charityImg, style: { height: '100%', justifyContent: 'space-between', paddingHorizontal: 12, paddingVertical: 12, backgroundColor: '#000' }, imageStyle: { height: 800, overflow: 'hidden', flex: 1 } },
            React.createElement(View, { style: { marginTop: 50 } },
                React.createElement(H1, { color: "light" }, "Welcome back"),
                React.createElement(H2, { color: "light" }, "Log in with your account")),
            React.createElement(View, null,
                React.createElement(Form, { onSubmit: () => undefined })),
            React.createElement(View, null, submitting ? (React.createElement(Loader, null)) : (React.createElement(Button, { variant: "contained", color: "primary", onPress: login, title: "Login" }))),
            React.createElement(View, { style: { alignItems: 'center' } },
                React.createElement(Txt, { color: "light" }, "Forgot Password?")),
            React.createElement(View, { style: { alignItems: 'center' } },
                React.createElement(Txt, { color: "light" }, "By Proceeding, I agree to the"),
                React.createElement(Txt, { color: "light" }, "Terms of Use and Privacy Policy")),
            React.createElement(JoinNowLink, null)));
    }
}
Login.navigationOptions = {
    header: React.createElement(FloatingHeader, { noCloseOption: true })
};
export default mapToProps(Login);
//# sourceMappingURL=index.js.map