import React from "react";
import { View, ImageBackground } from "react-native";
import Button from "components/Button";
import logger from "utilities/logger";
import routeNames from "containers/Navigation/routeNames";
import theme from "theme/iftheme";
import Logo from "components/Logo";
import H1 from "components/H1";
import H2 from "components/H2";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import LoginLink from "components/LoginLink";
class LaunchScreen extends React.Component {
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
        logger.log(this.props, 'LaunchScreen.tsx');
        const { navigation } = this.props;
        return (React.createElement(ImageBackground, { source: require('../../../assets/onboarding-bg.png'), style: {
                height: '100%',
                justifyContent: 'space-between',
                paddingHorizontal: theme.screenPadding,
                paddingVertical: theme.screenPadding,
                backgroundColor: '#000'
            }, imageStyle: {
                height: 900,
                overflow: 'hidden',
                flex: 1,
                alignSelf: 'flex-start'
            } },
            React.createElement(View, { style: { marginTop: 50 } },
                React.createElement(Logo, null),
                React.createElement(View, { style: { marginTop: 30 } },
                    React.createElement(H1, { color: "light", style: { fontWeight: "900", fontSize: theme.fontSize * 4 } }, "donisto"),
                    React.createElement(H2, { color: "light" }, "igniting philanthropy"))),
            React.createElement(View, null,
                React.createElement(View, { style: { marginBottom: 12 } },
                    React.createElement(Button, { icon: React.createElement(FontAwesome, { name: "facebook", size: theme.fontSize + 4, color: "#fff" }), color: "primary", variant: "rounded", title: "Continue with Facebook", onPress: () => navigation.navigate(routeNames.REGISTRATION_BASIC_INFO) })),
                React.createElement(View, { style: { marginBottom: 36 } },
                    React.createElement(Button, { icon: React.createElement(MaterialCommunityIcons, { name: "email", size: theme.fontSize + 4, color: "#000" }), color: "default", variant: "rounded", title: "Sign Up with Email", onPress: () => navigation.navigate(routeNames.REGISTRATION_BASIC_INFO) })),
                React.createElement(LoginLink, null))));
    }
}
LaunchScreen.charityImg = require('../../../assets/onboarding-bg.png');
export default LaunchScreen;
//# sourceMappingURL=index.js.map