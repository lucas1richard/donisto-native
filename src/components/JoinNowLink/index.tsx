import * as React from 'react';
import { View } from 'react-native';
import Txt from 'components/Txt';
import Touchable from 'components/Touchable';
import NavigationService from 'containers/Navigation/NavigationService';
import routeNames from 'containers/Navigation/routeNames';
import styles from './styles';

const nav = () => {
  NavigationService.navigate(routeNames.REGISTRATION_BASIC_INFO);
};

const JoinNowLink = () => {
  return (
    <View style={styles.wrapper}>
      <Txt color="light">
        Don&apos;t have an account?&nbsp;
      </Txt>
      <Touchable
        onPress={nav}
      >
        <View style={styles.joinNowWrapper}>
          <Txt color="light">
            Join now
          </Txt>
        </View>
      </Touchable>
    </View>
  );
};

export default JoinNowLink;
