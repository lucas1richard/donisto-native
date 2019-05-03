import * as React from 'react';
import { View, ImageBackground } from 'react-native';
import styles from './styles';
import Txt from 'components/Txt';

interface ICauseProps {
  title: string;
  img: NodeRequire;
}

class Cause extends React.Component<ICauseProps> {
  render() {
    const { title, img } = this.props;
    return (
      <View style={styles.wrapper}>
        <ImageBackground
          source={img}
          imageStyle={{ borderRadius: 10 }}
          style={styles.innerWrapper}
        >
          <View style={styles.textWrapper}>
            <Txt color="light">
              {title}
            </Txt>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default Cause;