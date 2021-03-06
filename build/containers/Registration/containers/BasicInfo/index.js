import * as React from 'react';
import RegistrationBasicInfoForm from './components/Form';
import { View, ImageBackground } from 'react-native';
import theme from 'theme/iftheme';
import mapToProps from './mapToProps';
import H1 from 'components/H1';
import H2 from 'components/H2';
import LoginLink from 'components/LoginLink';
import TOSandPrivacy from 'components/TOSandPrivacy';
const charityImg = require('../../../../../assets/onboarding-bg.png');
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
            React.createElement(View, { style: { justifyContent: 'space-between', flex: 1, paddingTop: 50 } },
                React.createElement(H1, { color: "light" }, "Create Account"),
                React.createElement(H2, { color: "light" }, "and start meeting new friends around the world"),
                React.createElement(RegistrationBasicInfoForm, { createContact: createContact }),
                React.createElement(TOSandPrivacy, null),
                React.createElement(LoginLink, null))));
    }
}
export default mapToProps(RegistrationBasicInfo);
//# sourceMappingURL=index.js.map