import React from 'react';

import {
  createStackNavigator,
  withNavigationFocus
} from "react-navigation";

import routeNames from "containers/Navigation/routeNames";
import UpdateContact from "./containers/UpdateContact";
import { View } from "react-native";
import FloatingHeader from 'components/FloatingHeader';
import Contact from './';

const AppNavigator = createStackNavigator({
  [routeNames.UPDATE_CONTACT]: {
    navigationOptions: {
      header: <FloatingHeader title="Update Contact" noCloseOption />
    },
    screen: withNavigationFocus(UpdateContact)
  },
  [routeNames.CONTACT]: {
    navigationOptions: {
      header: <View />
    },
    screen: withNavigationFocus(Contact)
  }
}, {
  initialRouteName: routeNames.CONTACT,
  navigationOptions: {
    header: <View />
  }
});

export default AppNavigator;