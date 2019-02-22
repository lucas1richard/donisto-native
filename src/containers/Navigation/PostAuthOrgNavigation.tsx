import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';

import routeNames from './routeNames';
import Organization from 'containers/Organization';
import { Entypo } from '@expo/vector-icons';
import theme from 'theme/iftheme';

const focusedColor = theme.primary[500];
const notFocusedColor = 'gray';

interface ITabBarIconProps {
  focused: boolean
}

const PostAuthOrgNavigator = createBottomTabNavigator({
  [routeNames.ORGANIZATION]: {
    navigationOptions: {
      tabBarLabel: 'Feed',
      tabBarIcon: ({ focused }: ITabBarIconProps) => (
        <Entypo
          size={20}
          name="news"
          style={{ textAlign: 'center', color: focused ? focusedColor : notFocusedColor }}
        />)
    },
    screen: Organization
  }
}, {
  initialRouteName: routeNames.ORGANIZATION,
  tabBarOptions: {
    activeTintColor: focusedColor,
    inactiveTintColor: notFocusedColor
  }
});

export default PostAuthOrgNavigator;