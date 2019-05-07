import * as React from 'react';
import { View, ImageBackground } from 'react-native';
import Touchable from 'components/Touchable';
import H2 from 'components/H2';
import styles from './styles';

interface IStoryProps {
  title: string;
  img: NodeRequire;
}

class Story extends React.Component<IStoryProps> {
  render() {
    const { title, img } = this.props;
    return (
      <View style={styles.wrapper}>
        <Touchable>
          <ImageBackground
            source={img}
            imageStyle={{ borderRadius: 10 }}
            style={styles.innerWrapper}
          >
            <View style={styles.shade}>
              <H2 color="light">
                {title}
              </H2>
            </View>
          </ImageBackground>
        </Touchable>
      </View>
    );
  }
}

export default Story;
