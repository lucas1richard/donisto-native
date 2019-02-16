import React from 'react';
import { View } from 'react-native';
import Txt from 'components/Txt';
import Touchable from 'components/Touchable';
import NavigationService from 'containers/Navigation/NavigationService';
import routeNames from 'containers/Navigation/routeNames';

const JoinNowLink = () => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 36 }}>
      <Txt color="light">Don&apos;t have an account? </Txt>
      <Touchable
        onPress={() => NavigationService.navigate(routeNames.REGISTRATION_BASIC_INFO)}
      >
        <View style={{ borderBottomWidth: 1, borderBottomColor: '#fff' }}>
          <Txt color="light">Join now</Txt>
        </View>
      </Touchable>
    </View>
  );
};

export default JoinNowLink;
