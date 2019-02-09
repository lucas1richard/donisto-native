import React from 'react';
import { View, Text } from 'react-native';
import mapToProps from './mapToProps';
import theme from 'theme/iftheme';
import { h1, h2 } from 'styles/Headings';
class Contact extends React.Component {
    render() {
        const { contact } = this.props;
        return (React.createElement(View, { style: { padding: theme.screenPadding, paddingTop: 30 } },
            React.createElement(Text, { style: h1() }, contact.email),
            React.createElement(Text, { style: h2() }, contact.uuid)));
    }
}
export default mapToProps(Contact);
//# sourceMappingURL=index.js.map