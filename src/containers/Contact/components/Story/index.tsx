import React from 'react';
import { View } from 'react-native';
import Touchable from 'components/Touchable';
import H2 from 'components/H2';
import styles from './styles';

interface IStoryProps {
  title: string;
}

class Story extends React.Component<IStoryProps> {
  render() {
    const { title } = this.props;
    return (
      <View style={styles.wrapper}>
        <Touchable>
          <View style={styles.innerWrapper}>
            <H2 color="light">{title}</H2>
          </View>
        </Touchable>
      </View>
    );
  }
}

export default Story;
