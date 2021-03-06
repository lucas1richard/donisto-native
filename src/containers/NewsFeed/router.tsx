import * as React from 'react';
import { createStackNavigator } from 'react-navigation';
import NewsFeed from '.';
import { View } from 'react-native';
import NewsItemDetail from './containers/NewsItemDetail';
// import FloatingHeader from 'components/FloatingHeader';
import CreateNewsStory from 'containers/Organization/containers/CreateNewsStory';
import routeNames from 'containers/Navigation/routeNames';
import ChooseCause from './containers/ChooseCause';
import ChooseOrganization from './containers/ChooseOrganization';

const NewsFeedRouter = createStackNavigator({
  newsfeedbase: {
    navigationOptions: {
      header: <View />
    },
    screen: NewsFeed
  },
  [routeNames.NEWS_ITEM_DETAIL]: {
    navigationOptions: {
      header: <View />
    },
    screen: NewsItemDetail
  },
  [routeNames.CHOOSE_CAUSE_NI]: {
    navigationOptions: {
      header: <View />
    },
    screen: ChooseCause
  },
  [routeNames.CHOOSE_ORGANIZATION_NI]: {
    navigationOptions: {
      header: <View />
    },
    screen: ChooseOrganization
  },
  [routeNames.CREATE_NEWS_ITEM]: {
    navigationOptions: {
      header: <View />
    },
    screen: CreateNewsStory
  }
});

export default NewsFeedRouter;