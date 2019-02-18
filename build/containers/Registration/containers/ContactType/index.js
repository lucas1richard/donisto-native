import React from 'react';
import { View } from 'react-native';
import Button from 'components/Button';
import theme from 'theme/iftheme';
import H1 from 'components/H1';
import H2 from 'components/H2';
class RegistrationContactType extends React.Component {
    render() {
        return (React.createElement(View, { style: { padding: theme.screenPadding } },
            React.createElement(H1, { color: "primary" }, "Tell us who you are"),
            React.createElement(Button, { color: "primary", title: "I'm a Nonprofit", onPress: () => undefined }),
            React.createElement(H2, { color: "secondary" }, "OR"),
            React.createElement(Button, { color: "primary", title: "I'm a Donor", onPress: () => undefined })));
    }
}
export default RegistrationContactType;
//# sourceMappingURL=index.js.map