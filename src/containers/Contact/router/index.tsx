import React from 'react';
import { View } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';
import routeNames from 'containers/Navigation/routeNames';
import UpdateContact from '../containers/UpdateContact';
import FloatingHeader from 'components/FloatingHeader';
import Contact from '../';
import theme from 'theme/iftheme';
import DrawerContent from './DrawerContent';
import causeRouter from 'containers/Cause/router';

const AppNavigator = createDrawerNavigator({
  [routeNames.UPDATE_CONTACT]: {
    navigationOptions: {
      header: <FloatingHeader title="Update Contact" noCloseOption />
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
      header: <FloatingHeader />
    },
    screen: causeRouter
  }
}, {
  initialRouteName: routeNames.CONTACT,
    drawerPosition: 'right',
    drawerWidth: theme.windowWidth * (3 / 4),
    drawerBackgroundColor: theme.blue,
    contentOptions: {
      labelStyle: {
        color: '#fff',
        fontSize: 18
      }
    },
    contentComponent: (props) => <DrawerContent {...props} />
});

export default AppNavigator;