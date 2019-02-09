import { StyleSheet } from 'react-native';
import theme from 'theme/iftheme';
const defaultViewStyles = {
    padding: 12,
    width: '100%',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center'
};
export const viewStyles = StyleSheet.create({
    outlined: Object.assign({}, defaultViewStyles, { borderWidth: 1, borderColor: theme.primary[600], backgroundColor: theme.primary[50] }),
    contained: Object.assign({}, defaultViewStyles, { borderWidth: 0, backgroundColor: theme.primary[600] }),
    text: {
        backgroundColor: '#fff'
    },
    primary: Object.assign({}, defaultViewStyles, { backgroundColor: theme.primary[400] }),
    secondary: Object.assign({}, defaultViewStyles, { backgroundColor: theme.secondary[400] }),
    default: Object.assign({}, defaultViewStyles, { backgroundColor: '#f2f2f2' }),
    _default: Object.assign({}, defaultViewStyles, { backgroundColor: '#f2f2f2' })
});
const defaultTextStyles = {
    fontSize: 18
};
export const textStyles = StyleSheet.create({
    primary: Object.assign({}, defaultTextStyles, { color: '#fff' }),
    secondary: Object.assign({}, defaultTextStyles, { color: '#fff' }),
    default: Object.assign({}, defaultTextStyles, { color: '#000' }),
    _default: Object.assign({}, defaultTextStyles, { color: '#000' })
});
//# sourceMappingURL=styles.js.map