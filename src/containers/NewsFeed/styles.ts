import { StyleSheet } from 'react-native';

const newsFeedStyles = StyleSheet.create({
  topWrapper: {
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#d3d3d3',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  itemsWrapper: {
    paddingHorizontal: 20
    // backgroundColor: '#f0f0f0'
  },
  iconsWrapper: {
    marginRight: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: 90
  },
  feedText: {
    fontSize: 22,
    fontWeight: '600'
  }
});

export default newsFeedStyles;