import React from "react";
import { View, Text } from "react-native";
import Button from "components/Button";
import logger from "utilities/logger";
import { h1 } from "styles/Headings";
import { NavigationFocusInjectedProps } from "react-navigation";
import routeNames from "containers/Navigation/routeNames";
import theme from "theme/iftheme";

interface ILaunchScreenProps {
  navigation: any
}

type TLaunchScreenProps = NavigationFocusInjectedProps<ILaunchScreenProps>;

class LaunchScreen extends React.Component<TLaunchScreenProps> {
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
    return (
      <View style={{ flex: 1, justifyContent: "space-between", padding: theme.screenPadding, paddingTop: 25 }}>
        <Text style={h1()}>
          Getting Started
        </Text>
        <Button
          color="primary"
          title="Sign-up for an account"
          onPress={() => navigation.navigate(routeNames.REGISTRATION_BASIC_INFO)}
        />
        <Text style={h1()}>
          OR
        </Text>
        <View>
          <Button
            color="primary"
            title="Sign-on to your account"
            onPress={() => navigation.navigate(routeNames.LOGIN)}
          />
        </View>
      </View>
    );
  }
}

export default LaunchScreen;