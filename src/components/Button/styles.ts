import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import theme from 'theme/iftheme';

const defaultViewStyles: ViewStyle = {
  // padding: theme.fontSize,
  height: 46,
  width: '100%',
  borderRadius: 8,
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row'
};

export const viewStyles = StyleSheet.create({
  outlined: {
    ...defaultViewStyles,
    borderWidth: 1,
    borderColor: theme.primary[600],
    backgroundColor: theme.primary[50]
  },
  rounded: {
    ...defaultViewStyles,
    borderRadius: 99
  },
  contained: {
    ...defaultViewStyles
  },
  text: {
  },
  primary: {
    ...defaultViewStyles,
    backgroundColor: theme.primary[500]
  },
  secondary: {
    ...defaultViewStyles,
    backgroundColor: theme.secondary[400]
  },
  default: {
    ...defaultViewStyles,
    backgroundColor: '#f2f2f2'
  },
  _default: {
    ...defaultViewStyles,
    backgroundColor: '#f2f2f2'
  }
});

const defaultTextStyles: TextStyle = {
  fontSize: theme.fs
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
  primary: {
    ...defaultTextStyles,
    color: '#fff'
  },
  secondary: {
    ...defaultTextStyles,
    color: '#fff'
  },
  default: {
    ...defaultTextStyles,
    color: '#000'
  },
  _default: {
    ...defaultTextStyles,
    color: '#000'
  }
});
