import { StyleSheet } from 'react-native';
import theme from 'theme/iftheme';

export default StyleSheet.create({
  wrapper: {
    position: 'relative',
    height: theme.fs * 10,
    marginBottom: theme.fs * 6
  },
  profilePicWrapper: {
    height: theme.fs * 10,
    width: theme.fs * 10 * (2 / 3),
    borderWidth: theme.fs / 3,
    backgroundColor: '#dedede',
    position: 'absolute',
    bottom: -theme.fs * 6,
    zIndex: 50,
    left: theme.screenPadding,
    borderRadius: theme.fs,
    borderColor: '#fff'
  },
  image: {
    height: theme.fs * 10,
    position: 'absolute',
    alignSelf: 'center',
    overflow: 'hidden'
  }
});
