import * as React from 'react';
import { View, ImageBackground } from 'react-native';
import styles from './styles';
import Txt from 'components/Txt';
import Touchable from 'components/Touchable';

interface IOrganizationProps {
  title: string;
  img: NodeRequire;
  onPress: () => any;
}

class Organization extends React.Component<IOrganizationProps> {
  render() {
    const { title, img, onPress } = this.props;
    return (
      <View style={styles.wrapper}>
        <Touchable onPress={onPress}>
          <ImageBackground
            source={img}
            imageStyle={{ borderRadius: 10 }}
            style={styles.innerWrapper}
          >
            <View style={styles.textWrapper}>
              <Txt color="light" style={{ textAlign: 'center' }}>
                {title}
              </Txt>
            </View>
          </ImageBackground>
        </Touchable>
      </View>
    );
  }
}

export default Organization;