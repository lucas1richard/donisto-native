import * as React from 'react';
import { View } from 'react-native';
import routeNames from 'containers/Navigation/routeNames';
import UpdateContact from '../containers/UpdateContact';
import Contact from '../';
import causeRouter from 'containers/Cause/router';
import { createStackNavigator } from 'react-navigation';
import RegisterNewOrganization from 'containers/Organization/containers/RegisterNewOrganization';
import orgLandingPageRouter from 'containers/Organization/containers/LandingPage/router';

const AppNavigator = createStackNavigator({
  [routeNames.UPDATE_CONTACT]: {
    navigationOptions: {
      header: <View />
    },
    screen: UpdateContact
  },
  [routeNames.CONTACT]: {
    navigationOptions: {
      header: <View />
    },
    screen: Contact
  },
  [routeNames.CAUSE]: {
    navigationOptions: {
      header: <View />
    },
    screen: causeRouter
  },
  [routeNames.ORGANIZATION_LANDING_PAGE_HOME]: {
    navigationOptions: {
      header: <View />
    },
    screen: orgLandingPageRouter
  },
  [routeNames.REGISTER_ORGANIZATION]: {
    navigationOptions: {
      header: <View />
    },
    screen: RegisterNewOrganization
  }
}, {
  initialRouteName: routeNames.CONTACT,
    // drawerPosition: 'right',
    // drawerWidth: theme.windowWidth * (3 / 4),
    // drawerBackgroundColor: theme.blue,
    // contentOptions: {
    //   labelStyle: {
    //     color: '#fff',
    //     fontSize: 18
    //   }
    // },
    // contentComponent: (props) => <DrawerContent {...props} />
});

export default AppNavigator;