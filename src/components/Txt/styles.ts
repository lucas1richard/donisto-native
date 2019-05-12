import { StyleSheet, TextStyle } from 'react-native';
import theme from 'theme/iftheme';

const defaultStyles: TextStyle = {
  fontSize: 18,
  color: theme.black
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
  },
  muted: {
    ...defaultStyles,
    color: '#bbb'
  },
});
