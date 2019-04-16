import { StyleSheet } from 'react-native';
import theme from 'theme/iftheme';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: theme.screenPadding,
    borderBottomWidth: 1
  },
  selectedWrapper: {
    backgroundColor: theme.primary[500],
    borderRadius: 1000,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center'
  },
  selectWrapper: {
    backgroundColor: '#dedede',
    borderRadius: 1000,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default styles;