import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import mapToProps from './mapToProps';
import NewsFeedItem from './components/NewsFeedItem';

interface INewsFeedProps {
  newsfeed: any[],
  loaded: boolean
}

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
          {newsfeed.map((item) => (
            <NewsFeedItem key={item.id} item={item} />
          ))}
        </View>
      </ScrollView>
    );
  }
}

export default mapToProps(NewsFeed);
