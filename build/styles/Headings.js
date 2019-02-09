import text from 'styles/Text';
const headingStyle = (size, weight) => ({
    fontWeight: weight,
    fontSize: size,
    textAlign: 'center'
});
export const h1 = (override = {}, color) => text(Object.assign({ textAlign: 'center', fontSize: 25 }, override), color);
export const h2 = (override = {}, color) => text(Object.assign({ textAlign: 'center', fontSize: 23 }, override), color);
export const h3 = (override = {}, color) => text(Object.assign({ textAlign: 'center', fontSize: 21 }, override), color);
export default headingStyle;
//# sourceMappingURL=Headings.js.map