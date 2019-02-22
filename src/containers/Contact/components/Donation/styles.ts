import { StyleSheet } from 'react-native';
import theme from 'theme/iftheme';

const styles = StyleSheet.create({
  wrapper: {
    width: theme.fs * 12,
    height: theme.fs * 12,
    padding: theme.fs
  },
  innerWrapper: {
    height: '100%',
    width: '100%',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default styles;