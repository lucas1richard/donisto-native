import React from 'react';
import { View, ImageBackground } from 'react-native';
import Form from './components/Form';
import mapToProps from './mapToProps';
import logger from 'utilities/logger';
import FloatingHeader from 'components/FloatingHeader';
import H1 from 'components/H1';
import Txt from 'components/Txt';
import JoinNowLink from 'components/JoinNowLink';
import TOSandPrivacy from 'components/TOSandPrivacy';
import styles from './styles';
const charityImg = require('../../../assets/onboarding-bg.png');
class Login extends React.Component {
    render() {
        const { login } = this.props;
        logger.log(this.props, 'Login');
        return (React.createElement(ImageBackground, { source: charityImg, style: styles.imgBackground, imageStyle: styles.imgStyle },
            React.createElement(View, { style: { marginTop: 50 } },
                React.createElement(H1, { color: "light" }, "Welcome back"),
                React.createElement(View, { style: { marginTop: 12, alignItems: 'center' } },
                    React.createElement(Txt, { color: "light" }, "Log in with your account"))),
            React.createElement(View, null,
                React.createElement(Form, { onSubmit: login })),
            React.createElement(View, { style: { alignItems: 'center' } },
                React.createElement(Txt, { color: "light" }, "Forgot Password?")),
            React.createElement(TOSandPrivacy, null),
            React.createElement(JoinNowLink, null)));
    }
}
Login.navigationOptions = {
    header: React.createElement(FloatingHeader, { noCloseOption: true })
};
export default mapToProps(Login);
//# sourceMappingURL=index.js.map