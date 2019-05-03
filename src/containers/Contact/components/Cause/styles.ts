import { StyleSheet } from 'react-native';
import theme from 'theme/iftheme';

const styles = StyleSheet.create({
  wrapper: {
    height: theme.fs * 5,
    width: theme.fs * 5,
    marginRight: theme.screenPadding
  },
  innerWrapper: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  textWrapper: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default styles;
