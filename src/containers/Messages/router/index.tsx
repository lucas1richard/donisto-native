import * as React from 'react';
import { createStackNavigator } from 'react-navigation';
import routeNames from 'containers/Navigation/routeNames';
import { View } from 'react-native';
import { Messages } from '..';
import SpecificMessages from '../containers/SpecificMessages';

const messagesRouter = createStackNavigator({
  [routeNames.MESSAGES_ALL]: {
    navigationOptions: {
      header: <View />
    },
    screen: Messages
  },
  [routeNames.MESSAGES_SPECIFIC]: {
    navigationOptions: {
      header: <View />
    },
    screen: SpecificMessages
  }
}, {
  mode: 'modal'
});

export default messagesRouter;