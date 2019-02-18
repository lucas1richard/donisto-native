/**
 * @fileoverview
 * Create the application here
 *
 * @module MAIN_APP
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import logger from './utilities/logger';
// import 'utilities/globals';
import React from 'react';
import { Constants, AppLoading, Asset } from 'expo';
import { Root } from 'native-base';
import { Provider } from 'react-redux';
import { Platform, StyleSheet, View, KeyboardAvoidingView, AppState } from 'react-native';
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
    constructor() {
        super(...arguments);
        this.state = {
            fontLoaded: false,
            appState: AppState.currentState
        };
        this.loadFonts = () => __awaiter(this, void 0, void 0, function* () {
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
            yield Promise.all([
                Asset.fromModule(require('../assets/scenic-1.jpg')).downloadAsync(),
                Asset.fromModule(require('../assets/onboarding-bg.png')).downloadAsync()
            ]);
        });
    }
    componentWillUnmount() {
        logger.log('unmounting', 'App.tsx');
    }
    render() {
        if (!this.state.fontLoaded) {
            return (React.createElement(AppLoading, { startAsync: this.loadFonts, onFinish: () => this.setState({ fontLoaded: true }) }));
        }
        return (React.createElement(View, { style: { flex: 1, paddingTop: isIphone10 ? 40 : 0 } },
            React.createElement(KeyboardAvoidingView, { keyboardVerticalOffset: 0, behavior: "padding", style: styles.appWrapper, contentContainerStyle: styles.appWrapper },
                React.createElement(Provider, { store: store },
                    React.createElement(View, { style: styles.appView },
                        React.createElement(StatusBar
                        // backgroundColor="transparent"
                        // barColor="#fff"
                        // barStyle="default"
                        , null),
                        React.createElement(Root, null,
                            React.createElement(AppNavigation, { ref: (navRef) => {
                                    NavigationService.setTopLevelNavigator(navRef);
                                } })))))));
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
//# sourceMappingURL=App.js.map