import React from 'react';
import { View, ScrollView } from "react-native";

import {
  createDrawerNavigator
} from "react-navigation";

import routeNames from "containers/Navigation/routeNames";
import UpdateContact from "./containers/UpdateContact";
import FloatingHeader from 'components/FloatingHeader';
import Contact from './';
import theme from 'theme/iftheme';
import Touchable from 'components/Touchable';
import NavigationService from 'containers/Navigation/NavigationService';
import H3 from 'components/H3';
import { MaterialIcons } from '@expo/vector-icons';

class DrawerContent extends React.Component {
  render() {
    return (
      <View style={{ paddingTop: theme.screenPadding, paddingLeft: theme.screenPadding, height: '100%' }}>
        <View style={{ alignItems: 'flex-end', marginRight: theme.screenPadding, marginBottom: theme.fs, height: theme.fs * 2 }}>
          <Touchable onPress={() => NavigationService.closeDrawer()}>
            <View>
            <MaterialIcons
              size={30}
              name="close"
              style={{ textAlign: 'center' }}
              color={'#fff'}
            />
            </View>
          </Touchable>
        </View>
        <ScrollView style={{ flex: 1 }}>
          <View style={{ marginBottom: theme.fs }}>
            <Touchable onPress={() => NavigationService.navigate(routeNames.CONTACT)}>
              <View>
                <H3 color="light">Profile</H3>
              </View>
            </Touchable>
          </View>
          <View style={{ marginBottom: theme.fs }}>
            <Touchable onPress={() => NavigationService.navigate(routeNames.UPDATE_CONTACT)}>
              <View>
                <H3 color="light">Update Profile</H3>
              </View>
            </Touchable>
          </View>
        </ScrollView>
      </View>
    );
  }
}

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