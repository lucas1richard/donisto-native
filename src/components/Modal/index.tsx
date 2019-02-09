import React from 'react';
import { Modal, View, ModalBaseProps, ScrollView } from 'react-native';
import Stack from 'components/StackHeader';
import logger from 'utilities/logger';
import StatusBarComponent from 'components/StatusBar';

interface RNModalProps extends ModalBaseProps {
  onShow?: () => any,
  onHide: () => any,
  children: any,
  title: string,
  onRequestClose?: () => any
}

class RNModal extends React.PureComponent<RNModalProps> {
  static marginTop: number;

  componentWillMount() {
    if (!RNModal.marginTop) {
      RNModal.marginTop = 20;
    }
  }

  modalWillShow = () => {
    if (this.props.onShow) {
      this.props.onShow();
    }
  }

  modalWillHide = () => {
    if (this.props.onRequestClose) {
      this.props.onRequestClose();
    }
    if (this.props.onHide) {
      this.props.onHide();
    }
  }

  render() {
    logger.log(RNModal.marginTop, 'Modal');
    const { children, title, ...rest } = this.props;
    return (
      <Modal animationType="slide" {...rest} onShow={this.modalWillShow}>
        <View style={{ flex: 1 }}>
          <StatusBarComponent />
          <Stack
            title={title}
            noBackOption
            onClose={this.modalWillHide}
          />
          <ScrollView>
            {children}
          </ScrollView>
        </View>
      </Modal>
    );
  }
}

export default RNModal;
