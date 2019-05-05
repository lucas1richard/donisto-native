import * as React from 'react';
import { View } from 'react-native';
import Txt from 'components/Txt';
import Touchable from 'components/Touchable';
import NavigationService from 'containers/Navigation/NavigationService';
import routeNames from 'containers/Navigation/routeNames';
import styles from './styles';

const LoginLink = () => (
  <View style={styles.wrapper}>
    <Txt color="light">
      Already have an account?
    </Txt>
    <Touchable onPress={() => NavigationService.navigate(routeNames.LOGIN)}>
      <View style={styles.loginWrapper}>
        <Txt color="light">
          Log In
        </Txt>
      </View>
    </Touchable>
  </View>
);

export default LoginLink;
