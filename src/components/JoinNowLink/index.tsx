import * as React from 'react';
import { View } from 'react-native';
import Txt from 'components/Txt';
import Touchable from 'components/Touchable';
import NavigationService from 'containers/Navigation/NavigationService';
import routeNames from 'containers/Navigation/routeNames';
import theme from 'theme/iftheme';

const JoinNowLink = () => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: theme.fs * 2 }}>
      <Txt color="light">
        Don&apos;t have an account?&nbsp;
      </Txt>
      <Touchable
        onPress={() => NavigationService.navigate(routeNames.REGISTRATION_BASIC_INFO)}
      >
        <View style={{ borderBottomWidth: theme.fs * 0.05, borderBottomColor: '#fff' }}>
          <Txt color="light">
            Join now
          </Txt>
        </View>
      </Touchable>
    </View>
  );
};

export default JoinNowLink;
