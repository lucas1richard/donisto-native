import React from 'react';
import { View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Txt from 'components/Txt';
import styles from './styles';

class BottomRow extends React.Component {
  render() {
    return (
      <View style={styles.bottomWrapper}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Entypo
            name="eye"
            color="rgb(200,199,204)"
            size={18}
          />
          <Txt style={{ fontSize: 13, marginLeft: 8 }}>4567</Txt>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Entypo
              name="heart"
              color="rgb(255,45,85)"
              size={22}
            />
            <Txt style={{ fontSize: 13, marginLeft: 8 }}>24</Txt>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 8 }}>
            <Entypo
              name="message"
              color="rgb(200,199,204)"
              size={22}
            />
            <Txt style={{ fontSize: 13, marginLeft: 8 }}>2</Txt>
          </View>
        </View>
      </View>
    );
  }
}

export default BottomRow;