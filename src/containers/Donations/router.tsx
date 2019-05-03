import React from 'react';
import { createStackNavigator } from 'react-navigation';
import routeNames from 'containers/Navigation/routeNames';
import { View } from 'react-native';
import Donations from '.';
import DonationsChooseCause from './containers/ChooseCause';
import CreateDonation from './containers/CreateDonation';
import ViewDonation from './containers/ViewDonation';
import FloatingHeader from 'components/FloatingHeader';

const donationsRouter = createStackNavigator({
  [routeNames.DONATIONS_HOME]: {
    navigationOptions: {
      header: <View />
    },
    screen: Donations
  },
  [routeNames.DONATIONS_CHOOSE_CAUSE]: {
    navigationOptions: {
      header: <FloatingHeader />
    },
    screen: DonationsChooseCause
  },
  [routeNames.DONATIONS_CREATE]: {
    navigationOptions: {
      header: <FloatingHeader />
    },
    screen: CreateDonation
  },
  [routeNames.DONATIONS_VIEW]: {
    navigationOptions: {
      header: <FloatingHeader />
    },
    screen: ViewDonation
  }
}, {
  initialRouteName: routeNames.DONATIONS_HOME
});

export default donationsRouter;