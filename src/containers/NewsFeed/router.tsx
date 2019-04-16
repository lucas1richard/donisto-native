import React from 'react';
import { createStackNavigator } from 'react-navigation';
import NewsFeed from '.';
import { View } from 'react-native';
import NewsItemDetail from './containers/NewsItemDetail';
import FloatingHeader from 'components/FloatingHeader';
import CreateNewsStory from 'containers/Organization/containers/CreateNewsStory';
import routeNames from 'containers/Navigation/routeNames';
import ChooseCause from './containers/ChooseCause';

const NewsFeedRouter = createStackNavigator({
  newsfeedbase: {
    navigationOptions: {
      header: <View />
    },
    screen: NewsFeed
  },
  [routeNames.NEWS_ITEM_DETAIL]: {
    navigationOptions: {
      header: <FloatingHeader />
    },
    screen: NewsItemDetail
  },
  [routeNames.CHOOSE_CAUSE_NI]: {
    navigationOptions: {
      header: <FloatingHeader />
    },
    screen: ChooseCause
  },
  [routeNames.CREATE_NEWS_ITEM]: {
    navigationOptions: {
      header: <FloatingHeader />
    },
    screen: CreateNewsStory
  }
});

export default NewsFeedRouter;