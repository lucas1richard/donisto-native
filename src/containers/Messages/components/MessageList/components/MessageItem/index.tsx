import * as React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { View } from 'react-native';
import Txt from 'components/Txt';
import ModalRP from 'components/ModalRP';
import styles from './styles';

class MessageItem extends React.Component<any> {
  render() {
    const { children } = this.props;
    return (
      <ModalRP trigger={(
        <View style={styles.wrapper}>
          <View style={styles.innerWrapper}>
            <View style={{ marginRight: 18 }}>
              <FontAwesome name="user" size={30} />
            </View>
            <View style={styles.childrenWrapper}>
              {children}
            </View>
          </View>
        </View>
      )}>
        <Txt>Messages</Txt>
      </ModalRP>
    );
  }
}

export default MessageItem;
