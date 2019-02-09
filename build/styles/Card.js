import theme from 'theme/iftheme';
/**
 * Function which creates an object to be inserted into StyleSheet
 */
const card = (specific = {}, colorSpec) => {
    let backgroundColor = theme.white;
    if (colorSpec) {
        backgroundColor = theme[colorSpec];
    }
    if (!backgroundColor) {
        backgroundColor = colorSpec;
    }
    return Object.assign({ backgroundColor, marginTop: 16, padding: 16, elevation: 3, shadowColor: '#555', shadowOpacity: 0.15, shadowOffset: {
            width: 2,
            height: 4
        }, shadowRadius: 6 }, specific);
};
export default card;
//# sourceMappingURL=Card.js.map