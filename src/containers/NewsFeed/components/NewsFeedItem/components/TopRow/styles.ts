import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  imgPlaceholder: {
    height: 32,
    width: 32,
    backgroundColor: '#f0f0f0',
    borderRadius: 16,
    marginRight: 12
  },
  nameWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  topWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    height: 58
  }
});

export default styles;
