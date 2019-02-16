import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { View, Text } from 'react-native';
import card from 'styles/Card';
import Touchable from 'components/Touchable';
import RNModal from 'components/Modal';


class MessageItem extends React.Component {
  state = {
    showModal: false
  }

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
          <Text>Messages</Text>
        </RNModal>
      </Touchable>
    );
  }
}

export default MessageItem;
