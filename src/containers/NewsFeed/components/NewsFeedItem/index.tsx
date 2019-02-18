import React from 'react';
import { View, Image } from 'react-native';
import Touchable from 'components/Touchable';
import RNModal from 'components/Modal';
import theme from 'theme/iftheme';
import card from 'styles/Card';
import H1 from 'components/H1';
import H2 from 'components/H2';
import Txt from 'components/Txt';

interface INewsFeedItemProps {
  item: any;
  img: any;
}

interface INewsFeedItemState {
  modalVisible: boolean;
}

class NewsFeedItem extends React.Component<INewsFeedItemProps, INewsFeedItemState> {
  state = {
    modalVisible: false
  };

  toggleModal = () => {
    this.setState({ modalVisible: !this.state.modalVisible });
  }

  render() {
    const { item, img } = this.props;
    return (
      <Touchable onPress={this.toggleModal}>
        <View key={item.id} style={card()}>
          <Image
            source={img}
            style={{ width: '100%', height: 200, overflow: 'hidden' }}
          />
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
            <Image
              source={img}
              style={{ width: '100%', height: 200, overflow: 'hidden' }}
            />
            <Txt>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </Txt>
            <Txt>
              Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Txt>
          </View>
        </RNModal>
      </Touchable>
    );
  }
}

export default NewsFeedItem;
