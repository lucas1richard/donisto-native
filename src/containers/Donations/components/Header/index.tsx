import React from 'react';
import { View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import theme from 'theme/iftheme';
import Txt from 'components/Txt';
import Touchable from 'components/Touchable';
import NavigationService from 'containers/Navigation/NavigationService';
import routeNames from 'containers/Navigation/routeNames';

function DonationsHeader() {
  return (
    <View style={{
      height: 60,
      borderBottomWidth: 1,
      borderBottomColor: '#d3d3d3',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 20
    }}>
    <Touchable onPress={() => NavigationService.navigate(routeNames.DONATIONS_CHOOSE_CAUSE)}>
      <View>
        <Entypo
          name="plus"
          color={theme.primary[500]}
          size={25}
        />
      </View>
    </Touchable>
    <Txt style={{ fontSize: 22, fontWeight: '600' }}>
      My Donations
    </Txt>
    <Entypo
      name="magnifying-glass"
      color={theme.primary[500]}
      size={25}
    />
  </View>
  );
}

export default DonationsHeader;