import * as React from 'react';
import { createStackNavigator } from 'react-navigation';
import { View } from 'react-native';
import CreateCause from './containers/CreateCause';

const causeRouter = createStackNavigator({
  createcause: {
    navigationOptions: {
      header: <View />
    },
    screen: CreateCause
  }
});

export default causeRouter;