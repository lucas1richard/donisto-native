import theme from 'theme/iftheme';
import { StyleSheet } from 'react-native';

/**
 * Function which creates an object to be inserted into StyleSheet
 */

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    marginTop: theme.fs,
    padding: theme.fs,
    elevation: 3,
    shadowColor: '#555',
    shadowOpacity: 0.15,
    shadowOffset: {
      width: 2,
      height: 4
    },
    shadowRadius: 6
  }
});

export default styles;
