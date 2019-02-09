import { StyleSheet } from 'react-native';
import theme from 'theme/iftheme';

interface IDefaultStyles {
  [x: string]: any;
}

const defaultViewStyles: IDefaultStyles = {
  padding: 12,
  width: '100%',
  borderRadius: 6,
  alignItems: 'center',
  justifyContent: 'center'
};

export const viewStyles = StyleSheet.create({
  outlined: {
    ...defaultViewStyles,
    borderWidth: 1,
    borderColor: theme.primary[600],
    backgroundColor: theme.primary[50]
  },
  contained: {
    ...defaultViewStyles,
    borderWidth: 0,
    backgroundColor: theme.primary[600]
  },
  text: {
    backgroundColor: '#fff'
  },
  primary: {
    ...defaultViewStyles,
    backgroundColor: theme.primary[400]
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

const defaultTextStyles: IDefaultStyles = {
  fontSize: 18
};

export const textStyles = StyleSheet.create({
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
