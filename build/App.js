var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import logger from './utilities/logger';
import React from 'react';
import { Constants, AppLoading, Asset } from 'expo';
import { Root } from 'native-base';
import { Provider } from 'react-redux';
import { Platform, StyleSheet, View, KeyboardAvoidingView, AppState } from 'react-native';
import StatusBar from 'components/StatusBar';
import 'theme/iftheme';
import configureStore from './redux/store';
import AppNavigation from 'containers/Navigation/AppNavigation';
import NavigationService from 'containers/Navigation/NavigationService';
const isIphone10 = Platform.OS === 'ios' && Constants.platform.ios.model === 'iPhone X';
const { store } = configureStore();
class App extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            fontLoaded: false,
            appState: AppState.currentState
        };
        this.loadAssets = () => __awaiter(this, void 0, void 0, function* () {
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
            return (React.createElement(AppLoading, { startAsync: this.loadAssets, onFinish: () => this.setState({ fontLoaded: true }) }));
        }
        return (React.createElement(View, { style: { flex: 1, paddingTop: isIphone10 ? 40 : 0 } },
            React.createElement(KeyboardAvoidingView, { keyboardVerticalOffset: 0, behavior: "padding", style: styles.appWrapper, contentContainerStyle: styles.appWrapper },
                React.createElement(Provider, { store: store },
                    React.createElement(View, { style: styles.appView },
                        React.createElement(StatusBar, null),
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