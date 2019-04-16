import { StyleSheet } from 'react-native';
import theme from 'theme/iftheme';

export default StyleSheet.create({
  imgBackground: {
    height: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 12,
    backgroundColor: '#000'
  },
  imgStyle: {
    height: theme.windowHeight,
    overflow: 'hidden',
    flex: 1
  }
});
