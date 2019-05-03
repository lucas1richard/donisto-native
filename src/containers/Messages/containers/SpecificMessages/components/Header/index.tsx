import * as React from 'react';
import { View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import theme from 'theme/iftheme';
import Txt from 'components/Txt';
import Touchable from 'components/Touchable';
import NavigationService from 'containers/Navigation/NavigationService';

class SpecificMessageHeader extends React.PureComponent {
  render() {
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
      <View style={{ width: 25 }} />
      <Txt style={{ fontSize: 22, fontWeight: '600' }}>
        Specific Message
      </Txt>
      <Touchable onPress={NavigationService.back}>
        <View>
          <MaterialIcons
            size={25}
            name="close"
            style={{ textAlign: 'center' }}
            color={theme.primary[500]}
          />
        </View>
      </Touchable>
      {/* <Entypo
        name="magnifying-glass"
        color={theme.primary[500]}
        size={25}
      /> */}
    </View>
    );
  }
}

export default SpecificMessageHeader;