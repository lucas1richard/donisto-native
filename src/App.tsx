import logger from './utilities/logger';
import React from 'react';
import { Constants, AppLoading, Asset } from 'expo';
import { Root } from 'native-base';
import { Provider } from 'react-redux';
import {
  Platform,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  AppState,
  SafeAreaView
} from 'react-native';
import StatusBar from 'components/StatusBar';
import 'theme/iftheme';
import configureStore from './redux/store';
import AppNavigation from 'containers/Navigation/AppNavigation';
import NavigationService from 'containers/Navigation/NavigationService';

const isIphone10 = Platform.OS === 'ios' && Constants.platform.ios.model === 'iPhone X';

const { store } = configureStore();

class App extends React.Component {
  state = {
    fontLoaded: false,
    appState: AppState.currentState
  };

  loadAssets = async () => {
    await Promise.all([
      Asset.fromModule(require('../assets/scenic-1.jpg')).downloadAsync(),
      Asset.fromModule(require('../assets/scenic-2.jpg')).downloadAsync(),
      Asset.fromModule(require('../assets/happy-1.jpg')).downloadAsync(),
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
          startAsync={this.loadAssets}
          onFinish={() => this.setState({ fontLoaded: true })}
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
          <SafeAreaView style={{flex: 1, backgroundColor: '#000' }}>
            <Provider store={store}>
              <View style={styles.appView}>
                <StatusBar />
                <Root>
                  <AppNavigation
                    ref={NavigationService.setTopLevelNavigator}
                  />
                </Root>
              </View>
            </Provider>
          </SafeAreaView>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  appWrapper: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  appView: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
