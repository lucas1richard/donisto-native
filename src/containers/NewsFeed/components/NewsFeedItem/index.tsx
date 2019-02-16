import React from 'react';
import { View, Text } from 'react-native';
import { h1, h2 } from 'styles/Headings';
import Touchable from 'components/Touchable';
import RNModal from 'components/Modal';
import theme from 'theme/iftheme';
import card from 'styles/Card';

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
          <Text style={h1()}>
            {item.title}
          </Text>
          <Text style={h2()}>
            {item.subtitle}
          </Text>
        </View>
        <RNModal
          title={item.title.slice(0, 20)}
          onHide={this.toggleModal}
          visible={this.state.modalVisible}
        >
          <View style={{ padding: theme.screenPadding }}>
            <Text style={h1()}>{item.subtitle}</Text>
          </View>
        </RNModal>
      </Touchable>
    );
  }
}

export default NewsFeedItem;
