import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import SwipeCards from 'react-native-swipe-cards';
import logger from 'utilities/logger';
import { Entypo } from '@expo/vector-icons';
import theme from 'theme/iftheme';
import Txt from 'components/Txt';

interface ICardProps {
  image: string;
  name: string;
}

class Card extends React.Component<ICardProps> {
  render() {
    return (
      <View style={styles.card}>
        <Image style={styles.thumbnail} source={{ uri: this.props.image }} />
        <Text style={styles.text}>This is card {this.props.name}</Text>
      </View>
    );
  }
}

class NoMoreCards extends React.Component {
  render() {
    return (
      <View style={styles.noMoreCards}>
        <Text>No more cards</Text>
      </View>
    );
  }
}

const cards = [
  { name: '1', image: 'https://source.unsplash.com/random/200x200?0' },
  { name: '2', image: 'https://source.unsplash.com/random/200x200?1' },
  { name: '3', image: 'https://source.unsplash.com/random/200x200?2' },
  { name: '4', image: 'https://source.unsplash.com/random/200x200?3' },
  { name: '5', image: 'https://source.unsplash.com/random/200x200?4' },
  { name: '6', image: 'https://source.unsplash.com/random/200x200?5' },
  { name: '7', image: 'https://source.unsplash.com/random/200x200?6' },
  { name: '8', image: 'https://source.unsplash.com/random/200x200?7' },
  { name: '9', image: 'https://source.unsplash.com/random/200x200?8' }
];

const cards2 = [
  { name: '10', image: 'https://source.unsplash.com/random/200x200?9' },
  { name: '11', image: 'https://source.unsplash.com/random/200x200?10' },
  { name: '12', image: 'https://source.unsplash.com/random/200x200?11' },
  { name: '13', image: 'https://source.unsplash.com/random/200x200?12' }
];

export interface IDiscoverProps {}
interface IDiscoverState {
  cards: any[];
  outOfCards: boolean
}

export default class Discover extends React.Component<IDiscoverProps, IDiscoverState> {
  constructor(props: IDiscoverProps) {
    super(props);
    this.state = {
      cards: cards,
      outOfCards: false
    };
  }

  handleYup = (/* card: any */) => {
    logger.log('yup', 'Discover/index.tsx');
  }

  handleNope = (/* card: any */) => {
    logger.log('nope', 'Discover/index.tsx');
  }

  cardRemoved = (index: number) => {
    let CARD_REFRESH_LIMIT = 3;

    if (this.state.cards.length - index <= CARD_REFRESH_LIMIT + 1) {
      logger.log(`There are only ${this.state.cards.length - index - 1} cards left.`, 'Discover/index.tsx');

      if (!this.state.outOfCards) {
        logger.log(`Adding ${cards2.length} more cards`, 'Discover/index.tsx');

        this.setState({
          cards: this.state.cards.concat(cards2),
          outOfCards: true
        });
      }
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{
          height: 60,
          borderBottomWidth: 1,
          borderBottomColor: '#d3d3d3',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20
        }}>
          <Entypo
            name="plus"
            color={theme.primary[500]}
            size={25}
          />
          <Txt style={{ fontSize: 22, fontWeight: '600' }}>
            Discover
          </Txt>
          <Entypo
            name="magnifying-glass"
            color={theme.primary[500]}
            size={25}
          />
        </View>
        <SwipeCards
          cards={this.state.cards}
          loop={false}
          renderCard={(cardData: ICardProps) => <Card {...cardData} />}
          renderNoMoreCards={() => <NoMoreCards />}
          showYup={true}
          showNope={true}
          handleYup={this.handleYup}
          handleNope={this.handleNope}
          cardRemoved={this.cardRemoved}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: 'grey',
    backgroundColor: 'white',
    borderWidth: 1,
    elevation: 1
  },
  thumbnail: {
    width: 300,
    height: 300
  },
  text: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10
  },
  noMoreCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
