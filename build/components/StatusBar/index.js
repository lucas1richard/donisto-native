import React from 'react';
import { View, Platform, StyleSheet, StatusBar } from 'react-native';
const STATUSBAR_HEIGHT = Platform.OS === 'ios'
    ? 20
    : StatusBar.currentHeight;
class StatusBarComponent extends React.PureComponent {
    render() {
        return (React.createElement(View, { style: styles.statusBar },
            React.createElement(StatusBar, null)));
    }
}
const styles = StyleSheet.create({
    statusBar: {
        height: STATUSBAR_HEIGHT,
        opacity: 1,
        zIndex: 150,
        backgroundColor: '#fff'
    }
});
export default StatusBarComponent;
//# sourceMappingURL=index.js.map