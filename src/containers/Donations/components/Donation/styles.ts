import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  marginWrapper: {
    width: '50%',
    height: 240,
    padding: 7.5
  },
  outerWrapper: {
    height: '100%',
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#555',
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 2,
      height: 4
    },
    shadowRadius: 6,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  imageWrapper: {
    overflow: 'hidden',
    height: '67%',
    backgroundColor: '#aaa',
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  image: {
    height: '100%',
    width: '100%'
  }
});

export default styles;
