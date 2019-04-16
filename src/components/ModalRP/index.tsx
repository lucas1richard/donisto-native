import React from 'react';
import RNModal from 'components/Modal';
import { View } from 'react-native';
import Touchable from 'components/Touchable';
import logger from 'utilities/logger';

interface ModalRPProps {
  trigger: any
}

class ModalRP extends React.Component<ModalRPProps> {
  state = {
    modalVisible: false
  };

  showModal = () => {
    logger.log('modalVisible', 'ModalRP');
    this.setState({
      modalVisible: true
    });
  }

  hideModal = () => {
    this.setState({
      modalVisible: false
    });
  }

  render() {
    const { children } = this.props;
    return (
      <View>
        <Touchable onPress={this.showModal}>
          {this.props.trigger}
        </Touchable>
        <RNModal visible={this.state.modalVisible} onHide={this.hideModal}>
          {children}
        </RNModal>
      </View>
    );
  }
}

export default ModalRP;