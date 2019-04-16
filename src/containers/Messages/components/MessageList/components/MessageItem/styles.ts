import { StyleSheet } from 'react-native';

const padding = 18;

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: padding,
    paddingLeft: padding
  },
  innerWrapper: {
    flexDirection: 'row'
  },
  childrenWrapper: {
    borderBottomWidth: 1,
    paddingBottom: padding,
    borderBottomColor: '#f0f0f0',
    paddingRight: padding
  }
});

export default styles;