import React from 'react';
import { View } from 'react-native';
import Touchable from 'components/Touchable';
import RNModal from 'components/Modal';
import theme from 'theme/iftheme';
import card from 'styles/Card';
import H1 from 'components/H1';
import H2 from 'components/H2';

interface INewsFeedItemProps {
  item: any,
}

interface INewsFeedItemState {
  modalVisible: boolean
}

class NewsFeedItem extends React.Component<INewsFeedItemProps, INewsFeedItemState> {
  state = {
    modalVisible: false
  };

  toggleModal = () => {
    this.setState({ modalVisible: !this.state.modalVisible });
  }

  render() {
    const { item } = this.props;
    return (
      <Touchable onPress={this.toggleModal}>
        <View key={item.id} style={card()}>
          <H1>
            {item.title}
          </H1>
          <H2>
            {item.subtitle}
          </H2>
        </View>
        <RNModal
          title={item.title.slice(0, 20)}
          onHide={this.toggleModal}
          visible={this.state.modalVisible}
        >
          <View style={{ padding: theme.screenPadding }}>
            <H2>{item.subtitle}</H2>
          </View>
        </RNModal>
      </Touchable>
    );
  }
}

export default NewsFeedItem;
