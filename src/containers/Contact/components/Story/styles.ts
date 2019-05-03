import { StyleSheet } from 'react-native';
import theme from 'theme/iftheme';

const styles = StyleSheet.create({
  wrapper: {
    width: 300,
    height: theme.fs * 24,
    marginRight: theme.screenPadding
    // padding: theme.fs
  },
  innerWrapper: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },
  shade: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)'
  }
});

export default styles;
