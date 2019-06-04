import { StyleSheet } from 'react-native';
import theme from 'theme/iftheme';

const pIndicatorStyles = StyleSheet.create({
  wrapper: {
    height: theme.fontSize / 2,
    backgroundColor: '#dedede',
    overflow: 'hidden',
    width: '100%'
  },
  bar: {
    backgroundColor: theme.primary[500],
    height: '100%'
  }
});

export default pIndicatorStyles;