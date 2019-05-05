var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as React from 'react';
import { View, ImageBackground } from 'react-native';
import Expo from 'expo';
import { Alert } from "react-native";
import Button from 'components/Button';
import logger from 'utilities/logger';
import routeNames from 'containers/Navigation/routeNames';
import theme from 'theme/iftheme';
import Logo from 'components/Logo';
import H1 from 'components/H1';
import H2 from 'components/H2';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import LoginLink from 'components/LoginLink';
import NavigationService from 'containers/Navigation/NavigationService';
const FacebookIcon = (React.createElement(FontAwesome, { name: "facebook", size: theme.fs, color: "#fff" }));
const EmailIcon = (React.createElement(MaterialCommunityIcons, { name: "email", size: theme.fs, color: "#000" }));
class LaunchScreen extends React.Component {
    constructor() {
        super(...arguments);
        this.logIn = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const { type, token } = yield Expo.Facebook.logInWithReadPermissionsAsync('372264243610330', {
                    permissions: ['public_profile']
                });
                if (type === 'success') {
                    // Get the user's name using Facebook's Graph API
                    const response = yield fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,first_name,last_name`);
                    const json = yield response.json();
                    Alert.alert('Logged in!', `Hi ${json.first_name}!`);
                }
                else {
                    // type === 'cancel'
                }
            }
            catch ({ message }) {
                alert(`Facebook Login Error: ${message}`);
            }
        });
    }
    shouldComponentUpdate() {
        if (this.props.isFocused === false) {
            return false;
        }
        return true;
    }
    componentWillUnmount() {
        logger.log('HomeScreen will unmount', 'LaunchScreen.tsx', 'orange');
    }
    componentWillUpdate() {
        logger.log('HomeScreen will update', 'LaunchScreen.tsx', 'teal');
    }
    render() {
        return (React.createElement(ImageBackground, { source: require('../../../assets/onboarding-bg.png'), style: {
                height: '100%',
                justifyContent: 'space-between',
                paddingHorizontal: theme.screenPadding,
                paddingVertical: theme.screenPadding,
                backgroundColor: '#000'
            }, imageStyle: {
                height: theme.windowHeight,
                overflow: 'hidden',
                flex: 1,
                alignSelf: 'flex-start'
            } },
            React.createElement(View, { style: { marginTop: 50 } },
                React.createElement(Logo, null),
                React.createElement(View, { style: { marginTop: 30 } },
                    React.createElement(H1, { color: "light", style: { fontWeight: "900", fontSize: theme.fs * 4 } }, "donisto"),
                    React.createElement(H2, { color: "light" }, "igniting philanthropy"))),
            React.createElement(View, null,
                React.createElement(View, { style: { marginBottom: 12 } },
                    React.createElement(Button, { icon: FacebookIcon, color: "primary", variant: "rounded", title: "Continue with Facebook", onPress: this.logIn })),
                React.createElement(View, { style: { marginBottom: 36 } },
                    React.createElement(Button, { icon: EmailIcon, color: "default", variant: "rounded", title: "Sign Up with Email", onPress: () => NavigationService.navigate(routeNames.REGISTRATION_BASIC_INFO) })),
                React.createElement(LoginLink, null))));
    }
}
LaunchScreen.charityImg = require('../../../assets/onboarding-bg.png');
export default LaunchScreen;
//# sourceMappingURL=index.js.map