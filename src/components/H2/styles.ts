import { StyleSheet, TextStyle } from 'react-native';
import theme from 'theme/iftheme';

const defaultStyles: TextStyle = {
  fontSize: theme.fontSize * 1.7,
  color: theme.black,
  textAlign: 'center'
};

export default StyleSheet.create({
  default: {
    ...defaultStyles
  },
  primary: {
    ...defaultStyles,
    color: theme.primary[500]
  },
  secondary: {
    ...defaultStyles,
    color: theme.secondary[500]
  },
  light: {
    ...defaultStyles,
    color: '#fff'
  }
});
