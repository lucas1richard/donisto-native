import * as React from 'react';
import { View } from 'react-native';
import Txt from 'components/Txt';
import Touchable from 'components/Touchable';
import { Entypo } from '@expo/vector-icons';
import styles from './styles';

export interface TopRowProps {
  name: string;
}

class TopRow extends React.Component<TopRowProps> {
  render() {
    const { name } = this.props;
    return (
      <View style={styles.topWrapper}>
        <View style={styles.nameWrapper}>
          <View style={styles.imgPlaceholder} />
          <View>
            <Txt style={{ fontSize: 16 }}>
              {name}
            </Txt>
            <Txt style={{ fontSize: 11, color: 'rgb(171, 169,167)' }}>
              @xyz123
            </Txt>
          </View>
        </View>
        <Touchable>
          <View>
            <Entypo
              name="dots-three-horizontal"
              color="#d0d0d0"
              size={19}
            />
          </View>
        </Touchable>
      </View>
    );
  }
}

export default TopRow;