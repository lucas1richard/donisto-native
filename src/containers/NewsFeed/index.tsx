import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import mapToProps from './mapToProps';
import NewsFeedItem from './components/NewsFeedItem';

interface INewsFeedProps {
  newsfeed: any[],
  loaded: boolean
}

const images = [
  require('../../../assets/scenic-1.jpg'),
  require('../../../assets/happy-1.jpg'),
  require('../../../assets/scenic-2.jpg')
];

class NewsFeed extends React.Component<INewsFeedProps> {
  render() {
    const { newsfeed, loaded } = this.props;
    return (
      <ScrollView>
        <View>
          {!loaded && (
            <View>
              <Text>
                Getting your news feed
              </Text>
            </View>
          )}
          {newsfeed.map((item, ix) => (
            <NewsFeedItem key={item.id} item={item} img={images[ix]} />
          ))}
        </View>
      </ScrollView>
    );
  }
}

export default mapToProps(NewsFeed);
