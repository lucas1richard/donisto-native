import * as React from 'react';
import Touchable from 'components/Touchable';
import { View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import theme from 'theme/iftheme';
const hitSlop = {
    top: 15,
    bottom: 15,
    left: 50,
    right: 50
};
function Left({ noBackOption, onBack }) {
    if (noBackOption) {
        return React.createElement(View, { style: styles.wrapper });
    }
    return (React.createElement(Touchable, { onPress: onBack, hitSlop: hitSlop },
        React.createElement(View, { style: styles.wrapper },
            React.createElement(Feather, { size: 30, name: "chevron-left", color: theme.primary[500] }))));
}
export default Left;
const styles = StyleSheet.create({
    wrapper: {
        // padding: 2,
        // paddingRight: 4,
        // paddingBottom: 4,
        // borderRadius: 20
        height: 34,
        width: 34,
        padding: 2,
        borderRadius: 17,
        zIndex: 100
    }
});
//# sourceMappingURL=Left.js.map