import React from 'react';
import { View, Image } from 'react-native';
import Txt from 'components/Txt';
import styles from './styles';

class Donation extends React.Component<any> {
  render() {
    const { img } = this.props;
    return (
      <View style={styles.marginWrapper}>
        <View style={styles.outerWrapper}>
          <View style={styles.imageWrapper}>
            <Image source={img} style={styles.image} />
          </View>
          <View style={{ padding: 10 }}>
            <Txt style={{ fontSize: 13 }}>
              School for Kids
            </Txt>
            <Txt style={{ fontSize: 13 }}>
              Pre-K to Junior High
            </Txt>
            <Txt style={{ fontSize: 13, color: '#aaa' }}>
              on Dec 14, 2018
            </Txt>
          </View>
        </View>
      </View>
    );
  }
}

export default Donation;