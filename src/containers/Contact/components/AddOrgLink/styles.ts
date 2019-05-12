import { StyleSheet } from 'react-native';
import theme from 'theme/iftheme';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    overflow: 'hidden',
    marginRight: theme.screenPadding
  }
});

export default styles;