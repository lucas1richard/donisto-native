import React from "react";
import { View, Text } from "react-native";
import Button from "components/Button";
import logger from "utilities/logger";
import { h1 } from "styles/Headings";
import routeNames from "containers/Navigation/routeNames";
import theme from "theme/iftheme";
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
        return (React.createElement(View, { style: { flex: 1, justifyContent: "space-between", padding: theme.screenPadding, paddingTop: 25 } },
            React.createElement(Text, { style: h1() }, "Getting Started"),
            React.createElement(Button, { color: "primary", title: "Sign-up for an account", onPress: () => navigation.navigate(routeNames.REGISTRATION_BASIC_INFO) }),
            React.createElement(Text, { style: h1() }, "OR"),
            React.createElement(View, null,
                React.createElement(Button, { color: "primary", title: "Sign-on to your account", onPress: () => navigation.navigate(routeNames.LOGIN) }))));
    }
}
export default LaunchScreen;
//# sourceMappingURL=index.js.map