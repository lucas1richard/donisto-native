import * as React from 'react';
import { View } from 'react-native';
// import { createDrawerNavigator } from 'react-navigation';
import routeNames from 'containers/Navigation/routeNames';
import UpdateContact from '../containers/UpdateContact';
// import FloatingHeader from 'components/FloatingHeader';
import Contact from '../';
// import theme from 'theme/iftheme';
// import DrawerContent from './DrawerContent';
import causeRouter from 'containers/Cause/router';
import { createStackNavigator } from 'react-navigation';
import OrganizationLandingPage from 'containers/Organization/containers/LandingPage';
import RegisterNewOrganization from 'containers/Organization/containers/RegisterNewOrganization';

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
  [routeNames.ORGANIZATION_LANDING_PAGE]: {
    navigationOptions: {
      header: <View />
    },
    screen: OrganizationLandingPage
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