import { StyleSheet } from 'react-native';
import theme from 'theme/iftheme';

export default StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: theme.fs * 2
  },
  loginWrapper: {
    borderBottomWidth: theme.fs * 0.05,
    borderBottomColor: '#fff'
  }
});