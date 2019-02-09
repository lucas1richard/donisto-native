import React from 'react';
import RegistrationBasicInfoForm from './components/Form';
import { View, Text } from 'react-native';
import Button from 'components/Button';
import { h2 } from 'styles/Headings';
import theme from 'theme/iftheme';
// import NavigationService from 'containers/Navigation/NavigationService';
// import routeNames from 'containers/Navigation/routeNames';
import mapToProps from './mapToProps';
class RegistrationBasicInfo extends React.Component {
    render() {
        const { createContact } = this.props;
        return (React.createElement(View, { style: { padding: 12, justifyContent: 'space-between', flex: 1 } },
            React.createElement(Text, { style: h2({ color: theme.secondary[500] }) }, "Provide account information"),
            React.createElement(RegistrationBasicInfoForm, null),
            React.createElement(Button, { color: "primary", title: "Next Step", onPress: createContact })));
    }
}
export default mapToProps(RegistrationBasicInfo);
//# sourceMappingURL=index.js.map