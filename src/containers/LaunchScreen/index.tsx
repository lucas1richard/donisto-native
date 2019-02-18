import React from "react";
import { View, ImageBackground } from "react-native";
import Button from "components/Button";
import logger from "utilities/logger";
import { NavigationFocusInjectedProps } from "react-navigation";
import routeNames from "containers/Navigation/routeNames";
import theme from "theme/iftheme";
import Logo from "components/Logo";
import H1 from "components/H1";
import H2 from "components/H2";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import LoginLink from "components/LoginLink";

interface ILaunchScreenProps {
  navigation: any
}

type TLaunchScreenProps = NavigationFocusInjectedProps<ILaunchScreenProps>;

class LaunchScreen extends React.Component<TLaunchScreenProps> {
  static charityImg = require('../../../assets/onboarding-bg.png');
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
      <ImageBackground
        source={require('../../../assets/onboarding-bg.png')}
        style={{
          height: '100%',
          justifyContent: 'space-between',
          paddingHorizontal: theme.screenPadding,
          paddingVertical: theme.screenPadding,
          backgroundColor: '#000'
        }}
        imageStyle={{
          height: 900,
          overflow: 'hidden',
          flex: 1,
          alignSelf: 'flex-start'
        }}
      >
        <View style={{ marginTop: 50 }}>
          <Logo />
          <View style={{ marginTop: 30 }}>
            <H1 color="light" style={{ fontWeight: "900", fontSize: theme.fontSize * 4 }}>
              donisto
            </H1>
            <H2 color="light">
              igniting philanthropy
            </H2>
          </View>
        </View>
        <View>
          <View style={{ marginBottom: 12 }}>
            <Button
              icon={<FontAwesome name="facebook" size={theme.fontSize + 4} color="#fff" />}
              color="primary"
              variant="rounded"
              title="Continue with Facebook"
              onPress={() => navigation.navigate(routeNames.REGISTRATION_BASIC_INFO)}
            />
          </View>
          <View style={{ marginBottom: 36 }}>
            <Button
              icon={<MaterialCommunityIcons name="email" size={theme.fontSize + 4} color="#000" />}
              color="default"
              variant="rounded"
              title="Sign Up with Email"
              onPress={() => navigation.navigate(routeNames.REGISTRATION_BASIC_INFO)}
            />
          </View>
          <LoginLink />
        </View>
      </ImageBackground>
    );
  }
}

export default LaunchScreen;