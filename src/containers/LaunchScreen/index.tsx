import React from 'react';
import { View, ImageBackground } from 'react-native';
import Expo from 'expo';
import { Alert } from "react-native";
import Button from 'components/Button';
import logger from 'utilities/logger';
import { NavigationFocusInjectedProps } from 'react-navigation';
import routeNames from 'containers/Navigation/routeNames';
import theme from 'theme/iftheme';
import Logo from 'components/Logo';
import H1 from 'components/H1';
import H2 from 'components/H2';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import LoginLink from 'components/LoginLink';
import NavigationService from 'containers/Navigation/NavigationService';

interface ILaunchScreenProps {
  navigation: any
}

type TLaunchScreenProps = NavigationFocusInjectedProps<ILaunchScreenProps>;

const FacebookIcon = (
  <FontAwesome
    name="facebook"
    size={theme.fs}
    color="#fff"
  />
);
const EmailIcon = (
  <MaterialCommunityIcons
    name="email"
    size={theme.fs}
    color="#000"
  />
);

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

  logIn = async () => {
    try {
      const {
        type,
        token
      } = await Expo.Facebook.logInWithReadPermissionsAsync('372264243610330', {
        permissions: ['public_profile']
      });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,first_name,last_name`);
        const json = await response.json();
        Alert.alert('Logged in!', `Hi ${json.first_name}!`);
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }

  render() {
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
          height: theme.windowHeight,
          overflow: 'hidden',
          flex: 1,
          alignSelf: 'flex-start'
        }}
      >
        <View style={{ marginTop: 50 }}>
          <Logo />
          <View style={{ marginTop: 30 }}>
            <H1 color="light" style={{ fontWeight: "900", fontSize: theme.fs * 4 }}>
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
              icon={FacebookIcon}
              color="primary"
              variant="rounded"
              title="Continue with Facebook"
              onPress={this.logIn}
            />
          </View>
          <View style={{ marginBottom: 36 }}>
            <Button
              icon={EmailIcon}
              color="default"
              variant="rounded"
              title="Sign Up with Email"
              onPress={() => NavigationService.navigate(routeNames.REGISTRATION_BASIC_INFO)}
            />
          </View>
          <LoginLink />
        </View>
      </ImageBackground>
    );
  }
}

export default LaunchScreen;