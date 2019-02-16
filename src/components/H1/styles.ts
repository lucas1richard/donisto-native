import { StyleSheet, TextStyle } from 'react-native';
import theme from 'theme/iftheme';

const defaultStyles: TextStyle = {
  fontSize: theme.fontSize * 2,
  color: theme.black,
  textAlign: 'center'
};

export default StyleSheet.create({
  default: {
    ...defaultStyles
  },
  primary: {
    ...defaultStyles,
    color: theme.primary[400]
  },
  secondary: {
    ...defaultStyles,
    color: theme.secondary[400]
  },
  light: {
    ...defaultStyles,
    color: '#fff'
  }
});
