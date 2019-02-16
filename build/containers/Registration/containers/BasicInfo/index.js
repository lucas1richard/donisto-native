import React from 'react';
import RegistrationBasicInfoForm from './components/Form';
import { View, ImageBackground } from 'react-native';
import Button from 'components/Button';
import theme from 'theme/iftheme';
import mapToProps from './mapToProps';
import H1 from 'components/H1';
import H2 from 'components/H2';
import Txt from 'components/Txt';
import LoginLink from 'components/LoginLink';
const charityImg = require('../../../../../assets/charity-demo.jpeg');
class RegistrationBasicInfo extends React.Component {
    render() {
        const { createContact } = this.props;
        return (React.createElement(ImageBackground, { source: charityImg, style: {
                height: '100%',
                justifyContent: 'space-between',
                paddingHorizontal: theme.screenPadding,
                paddingVertical: theme.screenPadding,
                backgroundColor: '#000'
            }, imageStyle: { height: 800, overflow: 'hidden', flex: 1 } },
            React.createElement(View, { style: { padding: 12, justifyContent: 'space-between', flex: 1 } },
                React.createElement(H1, { color: "light" }, "Create Account"),
                React.createElement(H2, { color: "light" }, "and start meeting new friends around the world"),
                React.createElement(RegistrationBasicInfoForm, null),
                React.createElement(Button, { color: "primary", variant: "contained", title: "Sign Up", onPress: createContact }),
                React.createElement(View, { style: { alignItems: 'center' } },
                    React.createElement(Txt, { color: "light" }, "By Proceeding, I agree to the"),
                    React.createElement(Txt, { color: "light" }, "Terms of Use and Privacy Policy")),
                React.createElement(LoginLink, null))));
    }
}
export default mapToProps(RegistrationBasicInfo);
//# sourceMappingURL=index.js.map