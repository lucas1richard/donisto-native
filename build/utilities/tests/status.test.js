import themeColors from 'theme/ifTheme';
import { getBackgroundColor, getIconName } from '../status';
describe('getIconName', () => {
    it('should return check', () => {
        expect(getIconName('good')).toEqual('check');
    });
    it('should return line', () => {
        expect(getIconName('medium')).toEqual('line');
    });
    it('should return delete', () => {
        expect(getIconName('bad')).toEqual('delete');
    });
    it('should return an empty string', () => {
        expect(getIconName()).toEqual('');
    });
});
describe('getBackgroundColor', () => {
    it('should return lightGreen', () => {
        expect(getBackgroundColor('good')).toEqual(themeColors.lightGreen);
    });
    it('should return yellow', () => {
        expect(getBackgroundColor('medium')).toEqual(themeColors.yellow);
    });
    it('should return red', () => {
        expect(getBackgroundColor('bad')).toEqual(themeColors.red);
    });
    it('should return an empty string', () => {
        expect(getBackgroundColor()).toEqual('');
    });
});
//# sourceMappingURL=status.test.js.map