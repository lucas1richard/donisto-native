import * as React from 'react';
import Touchable from 'components/Touchable';
import { View, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import theme from 'theme/iftheme';
const hitSlop = {
    top: 15,
    bottom: 15,
    left: 50,
    right: 50
};
function Right({ noCloseOption, onClose }) {
    if (noCloseOption) {
        return React.createElement(View, { style: styles.wrapper });
    }
    return (React.createElement(Touchable, { onPress: onClose, hitSlop: hitSlop },
        React.createElement(View, { style: styles.wrapper },
            React.createElement(MaterialIcons, { size: 30, name: "close", style: { textAlign: 'center' }, color: theme.blue }))));
}
export default Right;
const styles = StyleSheet.create({
    wrapper: {
        // backgroundColor: 'rgba(0,0,0,0.1)',
        height: 34,
        width: 34,
        padding: 2,
        borderRadius: 17,
        zIndex: 100
    }
});
//# sourceMappingURL=Right.js.map