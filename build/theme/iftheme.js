import { Dimensions } from 'react-native';
export const window = Dimensions.get('window');
theme = {
    green: '#64C0A3',
    darkGreen: '#64C0A3',
    blue: '#0F2243',
    navyBlue: '#154260',
    gold: 'gold',
    darkBlue: '#132D51',
    lightestRed: '#ff8d8d',
    lightRed: '#FF4949',
    red: '#EE0000',
    lightGreen: '#01D53C',
    lightBlue: '#00BAFF',
    mediumBlue: '#007AFF',
    mostMediumBlue: 'rgba(0,118,255,0.7)',
    halfMediumBlue: 'rgba(0,118,255,0.5)',
    lightMediumBlue: 'rgba(0,118,255,0.3)',
    slightMediumBlue: 'rgba(0,118,255,0.1)',
    skyBlue: '#89dbd7',
    lightestGray: '#EEEEEE',
    lightGray: '#e7e7e7',
    mediumGray: '#E1E1E1',
    badgeGray: '#DADADA',
    copyGray: '#8996A8',
    darkGray: '#939EAD',
    darkestGray: '#4A4A4A',
    white: '#FFFFFF',
    mostWhite: 'rgba(255, 255, 255, 0.7)',
    halfWhite: 'rgba(255, 255, 255, 0.5)',
    lightWhite: 'rgba(255, 255, 255, 0.3)',
    slightWhite: 'rgba(255, 255, 255, 0.1)',
    black: '#000000',
    mostOpacityBlue: 'rgba(19, 45, 81, 0.7)',
    halfOpacityBlue: 'rgba(19, 45, 81, 0.5)',
    pointFourDarkBlue: 'rgba(19, 45, 81, 0.4)',
    lightOpacityBlue: 'rgba(19, 45, 81, 0.3)',
    slightOpacityBlue: 'rgba(19, 45, 81, 0.1)',
    nativeBlue: '#1c7aff',
    yellow: '#FFC400',
    yellowGreen: '#BFD600',
    orange: '#FF5C00',
    pristineInputGray: '#A4AAB3',
    dev: 'magenta',
    new: {
        navyBlue: '#13445F',
        red: '#EA4A4A',
        lightRed: '#F48B8D',
        yellow: '#FCE25A',
        lightLightTeal: '#ADDEDC',
        lightTeal: '#57C3BD',
        tealWhite: '#EEF8F8',
        green: '#16A580',
        darkGreen: '#64C0A3',
        aquaBlue: '#006699',
        purple: '#7C5FAF'
    },
    primary: {
        50: '#fcebe8',
        100: '#fad7d1',
        200: '#f7c3bb',
        300: '#f4aea4',
        400: 'rgb(238, 135, 119)',
        // 400: '#f29a8d',
        500: 'rgb(251, 100, 65)',
        // 500: '#ef8676',
        600: '#3949ab',
        700: '#303f9f',
        800: '#283593',
        900: '#1a237e'
    },
    // primary: {
    //   50: '#e8eaf6',
    //   100: '#c5cae9',
    //   200: '#9fa8da',
    //   300: '#7986cb',
    //   400: '#5c6bc0',
    //   500: '#3f51b5',
    //   600: '#3949ab',
    //   700: '#303f9f',
    //   800: '#283593',
    //   900: '#1a237e'
    // },
    secondary: {
        50: '#fff3e0',
        100: '#ffe0b2',
        200: '#ffcc80',
        300: '#ffb74d',
        400: '#ffa726',
        500: '#ff9800',
        600: '#fb8c00',
        700: '#f57c00',
        800: '#ef6c00',
        900: '#e65100'
    },
    screenPadding: 12,
    fontSize: window.height / 40,
    fs: window.height / 40,
    windowHeight: window.height,
    windowWidth: window.width,
    windowScale: window.scale,
    windowFontScale: window.fontScale,
    mui: {
        palette: {
            common: {
                black: '#000',
                white: '#fff'
            },
            background: {
                paper: '#fff',
                default: '#fafafa'
            },
            primary: {
                light: 'rgba(239, 156, 143, 1)',
                main: 'rgba(240, 139, 124, 1)',
                dark: 'rgba(240, 124, 107, 1)',
                contrastText: '#fff'
            },
            secondary: {
                light: 'rgba(153, 153, 153, 1)',
                main: 'rgba(102, 102, 102, 1)',
                dark: 'rgba(51, 51, 51, 1)',
                contrastText: '#fff'
            },
            error: {
                light: '#e57373',
                main: '#f44336',
                dark: '#d32f2f',
                contrastText: '#fff'
            },
            text: {
                primary: 'rgba(0, 0, 0, 0.87)',
                secondary: 'rgba(0, 0, 0, 0.54)',
                disabled: 'rgba(0, 0, 0, 0.38)',
                hint: 'rgba(0, 0, 0, 0.38)'
            }
        }
    }
};
global.theme = theme;
export default theme;
//# sourceMappingURL=iftheme.js.map