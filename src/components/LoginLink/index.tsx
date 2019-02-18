import React from 'react';
import { View } from 'react-native';
import Txt from 'components/Txt';
import Touchable from 'components/Touchable';
import NavigationService from 'containers/Navigation/NavigationService';
import routeNames from 'containers/Navigation/routeNames';
import theme from 'theme/iftheme';

const LoginLink = () => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: theme.fs * 2 }}>
      <Txt color="light">Already have an account? </Txt>
      <Touchable
        onPress={() => NavigationService.navigate(routeNames.LOGIN)}
      >
        <View style={{ borderBottomWidth: theme.fs * 0.05, borderBottomColor: '#fff' }}>
          <Txt color="light">Log In</Txt>
        </View>
      </Touchable>
    </View>
  );
};

export default LoginLink;
