import {
  StyleSheet,
  Dimensions
} from 'react-native';
import theme from 'theme/iftheme';

export const winWidth = Dimensions.get('window').width;
const imgWidth = winWidth;

const pageDot = {
  backgroundColor: theme.white,
  borderWidth: 1,
  borderColor: theme.primary[400],
  width: 12,
  height: 12,
  borderRadius: 6,
  marginHorizontal: 4
};

const styles = StyleSheet.create({
  image: {
    height: imgWidth,
    width: imgWidth
  },
  pageDot,
  pageDotActive: {
    ...pageDot,
    backgroundColor: theme.primary[400]
  },
  dotSeparater: {
    width: 4
  },
  dotWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 4
  },
  wrapper: {
    flex: 1,
    position: 'relative',
    marginBottom: 12
  },
  imgWrapper: {
    width: winWidth
  }
});

export default styles;
