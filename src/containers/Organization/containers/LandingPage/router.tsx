import * as React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import routeNames from 'containers/Navigation/routeNames';
import OrganizationLandingPage from './';
import CauseDetail from './containers/CauseDetail';

const orgLandingPageRouter = createStackNavigator({
  [routeNames.ORGANIZATION_LANDING_PAGE_HOME]: {
    navigationOptions: {
      header: <View />
    },
    screen: OrganizationLandingPage
  },
  [routeNames.ORGANIZATION_LANDING_PAGE_CAUSE_DETAIL]: {
    navigationOptions: {
      header: <View />
    },
    screen: CauseDetail
  }
});

export default orgLandingPageRouter;