import React from 'react';
import { View, StyleSheet } from 'react-native';
import Left from './components/Left';
import Right from './components/Right';
import NavigationService from 'containers/Navigation/NavigationService';
import theme from 'theme/iftheme';
import H1 from 'components/H1';
class StackHeader extends React.Component {
    render() {
        const { noBackOption, noCloseOption, title, onClose } = this.props;
        return (React.createElement(View, { style: styles.wrapper },
            React.createElement(Left, { noBackOption: noBackOption, onBack: NavigationService.back }),
            React.createElement(H1, { color: "primary" }, title),
            React.createElement(Right, { noCloseOption: noCloseOption, onClose: onClose })));
    }
}
StackHeader.defaultProps = {
    title: ''
};
export default StackHeader;
const styles = StyleSheet.create({
    wrapper: {
        height: 45,
        backgroundColor: '#fff',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        // flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: theme.primary[500],
        flexDirection: 'row'
    }
});
//# sourceMappingURL=index.js.map