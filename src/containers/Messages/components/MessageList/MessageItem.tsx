import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { View } from 'react-native';
import card from 'styles/Card';
import Touchable from 'components/Touchable';
import RNModal from 'components/Modal';
import Txt from 'components/Txt';

interface IMessagetemState {
  showModal: boolean
}

class MessageItem extends React.Component<any, IMessagetemState> {
  state = {
    showModal: false
  };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    const { children } = this.props;
    return (
      <Touchable onPress={this.toggleModal}>
        <View style={card()}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ marginRight: 18 }}>
              <FontAwesome name="user" size={30} />
            </View>
            <View>
              {children}
            </View>
          </View>
        </View>
        <RNModal visible={this.state.showModal} onHide={this.toggleModal}>
          <Txt>Messages</Txt>
        </RNModal>
      </Touchable>
    );
  }
}

export default MessageItem;
