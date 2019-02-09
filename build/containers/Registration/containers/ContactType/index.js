import React from 'react';
import { View, Text } from 'react-native';
import Button from 'components/Button';
import { h2, h1 } from 'styles/Headings';
import theme from 'theme/iftheme';
class RegistrationContactType extends React.Component {
    render() {
        return (React.createElement(View, { style: { padding: theme.screenPadding } },
            React.createElement(Text, { style: h1({ color: theme.primary[500] }) }, "Tell us who you are"),
            React.createElement(Button, { color: "primary", title: "I'm a Nonprofit", onPress: () => undefined }),
            React.createElement(Text, { style: h2({ color: theme.secondary[500] }) }, "OR"),
            React.createElement(Button, { color: "primary", title: "I'm a Donor", onPress: () => undefined })));
    }
}
export default RegistrationContactType;
//# sourceMappingURL=index.js.map