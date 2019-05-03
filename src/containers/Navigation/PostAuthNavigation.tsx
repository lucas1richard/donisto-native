import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';

import routeNames from './routeNames';
import NewsFeed from 'containers/NewsFeed/router';
// import Donations from 'containers/Donations';
import Discover from 'containers/Discover';
// import Messages from 'containers/Messages';
import Contact from 'containers/Contact/router';
import { FontAwesome, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import theme from 'theme/iftheme';
import messagesRouter from 'containers/Messages/router';
import donationsRouter from 'containers/Donations/router';

const focusedColor = theme.primary[500];
const notFocusedColor = 'gray';

interface ITabBarIconProps {
  focused: boolean
}

const PostAuthNavigator = createBottomTabNavigator({
  [routeNames.NEWS_FEED]: {
    navigationOptions: {
      tabBarLabel: 'Feed',
      tabBarIcon: ({ focused }: ITabBarIconProps) => (
        <Entypo
          size={20}
          name="news"
          style={{ textAlign: 'center', color: focused ? focusedColor : notFocusedColor }}
        />)
    },
    screen: NewsFeed
  },
  [routeNames.DISCOVER]: {
    navigationOptions: {
      tabBarLabel: 'Discover',
      tabBarIcon: ({ focused }: ITabBarIconProps) => (
        <Entypo
          size={20}
          name="magnifying-glass"
          style={{ textAlign: 'center', color: focused ? focusedColor : notFocusedColor }}
        />)
    },
    screen: Discover
  },
  [routeNames.DONATIONS]: {
    navigationOptions: {
      tabBarLabel: 'Donations',
      tabBarIcon: ({ focused }: ITabBarIconProps) => (
        <FontAwesome
          size={20}
          name="money"
          style={{ textAlign: 'center', color: focused ? focusedColor : notFocusedColor }}
        />)
    },
    screen: donationsRouter
  },
  [routeNames.MESSAGES]: {
    navigationOptions: {
      tabBarLabel: 'Messages',
      tabBarIcon: ({ focused }: ITabBarIconProps) => (
        <MaterialCommunityIcons
          size={20}
          name={focused ? 'message' : 'message-outline'}
          style={{ textAlign: 'center', color: focused ? focusedColor : notFocusedColor }}
        />)
    },
    screen: messagesRouter
  },
  [routeNames.PROFILE]: {
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ focused }: ITabBarIconProps) => (
      <FontAwesome
        size={20}
        name={focused ? 'user' : 'user-o'}
        style={{ textAlign: 'center', color: focused ? focusedColor : notFocusedColor }}
      />)
    },
    screen: Contact
  }
}, {
  initialRouteName: routeNames.PROFILE,
  tabBarOptions: {
    activeTintColor: focusedColor,
    inactiveTintColor: notFocusedColor,
    safeAreaInset: { bottom: 'never' }
  }
});

export default PostAuthNavigator;