import { StyleSheet } from 'react-native';
import theme from 'theme/iftheme';
const defaultViewStyles = {
    padding: theme.fontSize,
    width: '100%',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
};
export const viewStyles = StyleSheet.create({
    outlined: Object.assign({}, defaultViewStyles, { borderWidth: 1, borderColor: theme.primary[600], backgroundColor: theme.primary[50] }),
    rounded: Object.assign({}, defaultViewStyles, { borderRadius: 99 }),
    contained: Object.assign({}, defaultViewStyles),
    text: {},
    primary: Object.assign({}, defaultViewStyles, { backgroundColor: theme.primary[500] }),
    secondary: Object.assign({}, defaultViewStyles, { backgroundColor: theme.secondary[400] }),
    default: Object.assign({}, defaultViewStyles, { backgroundColor: '#f2f2f2' }),
    _default: Object.assign({}, defaultViewStyles, { backgroundColor: '#f2f2f2' })
});
const defaultTextStyles = {
    fontSize: theme.fontSize + 4
};
export const textStyles = StyleSheet.create({
    'text-primary': {
        color: theme.primary[400],
        borderBottomWidth: 1,
        borderBottomColor: theme.primary[400]
    },
    'text-secondary': {
        color: theme.secondary[400]
    },
    'text-default': {
        color: '#000'
    },
    primary: Object.assign({}, defaultTextStyles, { color: '#fff' }),
    secondary: Object.assign({}, defaultTextStyles, { color: '#fff' }),
    default: Object.assign({}, defaultTextStyles, { color: '#000' }),
    _default: Object.assign({}, defaultTextStyles, { color: '#000' })
});
//# sourceMappingURL=styles.js.map