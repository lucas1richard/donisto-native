/**
 * @fileoverview
 * Create the application here
 *
 * @module MAIN_APP
 */

import logger from './utilities/logger';
// import 'utilities/globals';
import React from 'react';
import { Constants, AppLoading, Asset } from 'expo';
import { Root } from 'native-base';
import { Provider } from 'react-redux';
import {
  Platform,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  AppState
} from 'react-native';
// import AppNav from 'containers/Navigation/AppNavigation';
// import AppWrapper from 'containers/AppWrapper';
// import NotificationsWrapper from 'containers/Notifications/NotificationsWrapper';
// import NetworkConnection from 'containers/NetworkConnection';
import StatusBar from 'components/StatusBar';
// import LaunchScreen from 'containers/LaunchScreen';
// import { nav } from 'containers/Navigation/actions';
// import { logIn } from 'containers/Navigation/routeNames';
import 'theme/iftheme';
// import { checkHasAccount } from 'utilities/accountDevice';
import configureStore from './redux/store';
import AppNavigation from 'containers/Navigation/AppNavigation';
import NavigationService from 'containers/Navigation/NavigationService';

// Turn off Remote Debugger running in background warning
console.ignoredYellowBox = ['Remote debugger']; // eslint-disable-line

const isIphone10 = Platform.OS === 'ios' && Constants.platform.ios.model === 'iPhone X';
// global.isIphone10 = isIphone10;
// global.toastDuration = 4000;

// const runningInExpo = Constants.appOwnership === 'expo';

const { store } = configureStore();

class App extends React.Component {
  state = {
    fontLoaded: false,
    appState: AppState.currentState
  };

  loadFonts = async () => {
    // logger.info('Checking if there\'s an account on this device', 'App.js');
    // const hasAccount = await checkHasAccount();

    // logger.info('loading fonts', 'App.js');
    // await Font.loadAsync({
    //   'proxima-soft-regular': require('./assets/fonts/Proxima-Soft-Regular.ttf'),
    //   'proxima-soft-semi-bold': require('./assets/fonts/Proxima-Soft-Semibold.ttf'),
    //   'proxima-soft-bold': require('./assets/fonts/Proxima-Soft-Bold.ttf'),
    //   'proxima-soft-extra-bold': require('./assets/fonts/Proxima-Soft-Extrabold.ttf'),
    //   'proxima-soft-boldest': require('./assets/fonts/Proxima-Soft-Black.ttf')
    // });
    // if (hasAccount) {
      // logger.info('there is an account, nav to /login', 'App.js');
    // }
    await Promise.all([
      Asset.fromModule(require('../assets/scenic-1.jpg')).downloadAsync(),
      Asset.fromModule(require('../assets/onboarding-bg.png')).downloadAsync()
    ]);
  }

  componentWillUnmount() {
    logger.log('unmounting', 'App.tsx');
  }

  render() {
    if (!this.state.fontLoaded) {
      return (
        <AppLoading
          startAsync={this.loadFonts}
          onFinish={() => this.setState({ fontLoaded: true })}
          // onError={(err) => logger.error(err, 'App.js')}
        />
      );
    }
    return (
      <View style={{ flex: 1, paddingTop: isIphone10 ? 40 : 0 }}>
        <KeyboardAvoidingView
          keyboardVerticalOffset={0}
          behavior="padding"
          style={styles.appWrapper}
          contentContainerStyle={styles.appWrapper}
        >
          <Provider store={store}>
            <View style={styles.appView}>
              <StatusBar
                // backgroundColor="transparent"
                // barColor="#fff"
                // barStyle="default"
              />
              {/* <NotificationsWrapper>
                <AppWrapper> */}
                  <Root>
                    {/* <NetworkConnection /> */}
                    <AppNavigation
                      ref={(navRef: any) => {
                        NavigationService.setTopLevelNavigator(navRef);
                      }}
                    />
                  </Root>
                {/* </AppWrapper>
              </NotificationsWrapper> */}
            </View>
          </Provider>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  appWrapper: {
    flex: 1,
    backgroundColor: '#fff'
  },
  appView: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
