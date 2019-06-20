import React from 'react';
import { ImageBackground, View } from 'react-native';
import theme from 'theme/iftheme';
import H3 from 'components/H3';
import Txt from 'components/Txt';

import SwipeCards from 'react-native-swipe-cards';

export interface SwiperCardsProps {
  cards: IOrganization[];
  handleYup: (card: IOrganization) => any;
  handleNope: (card: IOrganization) => any;
}

const Card = (card: IOrganization) => (
  <ImageBackground source={require('../../../../../assets/scenic-1.jpg')} style={{ height: 300, width: 350 }}>
    <View style={{ height: 300, width: 350, backgroundColor: 'rgba(0,0,0,0.5)', padding: theme.screenPadding, justifyContent: 'space-between' }}>
      <View>
        <H3 color="light">{card.name}</H3>
        <Txt color="light" style={{ fontWeight: '600' }}>Mission:</Txt>
        <Txt color="light">{card.mission}</Txt>
      </View>
      <View>
        <Txt color="light" style={{ fontWeight: '600' }}>City:</Txt>
        <Txt color="light">{card.city}</Txt>
        <Txt color="light" style={{ fontWeight: '600' }}>State:</Txt>
        <Txt color="light">{card.state}</Txt>
        <Txt color="light" style={{ fontWeight: '600' }}>Zip:</Txt>
        <Txt color="light">{card.zip}</Txt>
      </View>
    </View>
  </ImageBackground>
);

class SwiperCards extends React.Component<SwiperCardsProps> {
  render() {
    const { cards, handleYup, handleNope } = this.props;
    return (!!cards && !!cards.length)
    ? (
      <SwipeCards
        cards={cards}
        loop={false}
        renderCard={Card}
        renderNoMoreCards={() => <View><Txt>No More Cards</Txt></View>}
        showYup={false}
        showNope={false}
        handleYup={handleYup}
        handleNope={handleNope}
        cardRemoved={() => false}
      />
    )
    : (
      <View>
        <Txt>None</Txt>
      </View>
    );
  }
}

export default SwiperCards;
