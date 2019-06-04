import { StyleSheet } from 'react-native';
import theme from 'theme/iftheme';

const styles = StyleSheet.create({
  causeWrapper: {
    marginBottom: theme.screenPadding,
    borderBottomWidth: 1,
    padding: 3,
    // flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default styles;