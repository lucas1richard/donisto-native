import React from 'react';
import { View, ScrollView } from 'react-native';
import mapToProps from './mapToProps';
import NewsFeedItem from './components/NewsFeedItem';
import Loader from 'components/Loader';

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
              <Loader />
            </View>
          )}
          {newsfeed.map((item, ix) => (
            <NewsFeedItem
              key={item.id}
              item={item}
              img={images[ix % (images.length)]}
            />
          ))}
        </View>
      </ScrollView>
    );
  }
}

export default mapToProps(NewsFeed);
