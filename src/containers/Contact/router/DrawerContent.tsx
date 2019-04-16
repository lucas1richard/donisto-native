import React from 'react';
import { View, ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import routeNames from 'containers/Navigation/routeNames';
import theme from 'theme/iftheme';
import Touchable from 'components/Touchable';
import NavigationService from 'containers/Navigation/NavigationService';
import { MaterialIcons } from '@expo/vector-icons';
import Link from './Link';

class DrawerContent extends React.Component {
  render() {
    return (
      <View style={styles.outerWrapper}>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.innerWrapper}>
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
            <Link
              route={routeNames.CONTACT}
              title="Profile"
            />
            <Link
              route={routeNames.UPDATE_CONTACT}
              title="Update Profile"
            />
            <Link
              route={routeNames.ORGANIZATION}
              title="Organization"
            />
            <Link
              route={routeNames.CAUSE}
              title="Cause"
            />
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}

export default DrawerContent;

const styles = StyleSheet.create({
  outerWrapper: {
    paddingTop: theme.screenPadding,
    paddingLeft: theme.screenPadding,
    height: '100%'
  },
  innerWrapper: {
    alignItems: 'flex-end',
    marginRight: theme.screenPadding,
    marginBottom: theme.fs,
    height: theme.fs * 2
  }
});