import React from 'react';
import {
  createBottomTabNavigator
} from "react-navigation";

import routeNames from "./routeNames";
import NewsFeed from 'containers/NewsFeed';
import Donations from 'containers/Donations';
import Discover from 'containers/Discover';
import Messages from 'containers/Messages';
import Contact from 'containers/Contact/router';
import { FontAwesome, Entypo, Feather } from "@expo/vector-icons";
import theme from 'theme/iftheme';

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
    screen: Donations
  },
  [routeNames.MESSAGES]: {
    navigationOptions: {
      tabBarLabel: 'Messages',
      tabBarIcon: ({ focused }: ITabBarIconProps) => (
        <Feather
          size={20}
          name="message-square"
          style={{ textAlign: 'center', color: focused ? focusedColor : notFocusedColor }}
        />)
    },
    screen: Messages
  },
  [routeNames.PROFILE]: {
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ focused }: ITabBarIconProps) => (
      <FontAwesome
        size={20}
        name="user-o"
        style={{ textAlign: 'center', color: focused ? focusedColor : notFocusedColor }}
      />)
    },
    screen: Contact
  }
}, {
  initialRouteName: routeNames.PROFILE,
  tabBarOptions: {
    activeTintColor: focusedColor,
    inactiveTintColor: notFocusedColor
  }
});

export default PostAuthNavigator;