import React from 'react';
import Touchable from 'components/Touchable';
import { View, Image } from 'react-native';
import styles from './styles';

interface ImgProps {
  navDetail: () => any;
  img: NodeRequire
}

class Img extends React.Component<ImgProps> {
  render() {
    const { navDetail, img } = this.props;
    return (
      <Touchable onPress={navDetail}>
        <View>
          <Image
            source={img}
            style={styles.img}
          />
        </View>
      </Touchable>
    );
  }
}

export default Img;
