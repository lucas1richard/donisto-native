import * as React from 'react';
import {
  createStackNavigator,
  withNavigationFocus
} from "react-navigation";

import LaunchScreen from 'containers/LaunchScreen';
import Login from "containers/Login";
import routeNames from "./routeNames";
import RegistrationRouter from "containers/Registration/router";
import { View } from "react-native";

const navigationOptions = {
  header: <View />
};

const PreAuthNavigator = createStackNavigator({
  [routeNames.LAUNCH]: {
    navigationOptions,
    screen: withNavigationFocus(LaunchScreen)
  },
  [routeNames.LOGIN]: {
    screen: withNavigationFocus(Login)
  },
  [routeNames.REGISTRATION]: {
    screen: RegistrationRouter
  }
}, {
  initialRouteName: routeNames.LAUNCH
});

export default PreAuthNavigator;