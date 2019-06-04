import { StyleSheet } from 'react-native';
import theme from 'theme/iftheme';

const styles = StyleSheet.create({
  ibStyle: {
    height: '100%',
    justifyContent: 'space-between',
    backgroundColor: '#000'
  },
  ibImageStyle: {
    height: theme.windowHeight,
    width: theme.windowWidth,
    flex: 1
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: theme.screenPadding,
    paddingVertical: 60
  }
});

export default styles;
