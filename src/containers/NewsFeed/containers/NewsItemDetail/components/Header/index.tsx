import * as React from 'react';
import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import theme from 'theme/iftheme';
import Txt from 'components/Txt';
import Touchable from 'components/Touchable';
import NavigationService from 'containers/Navigation/NavigationService';

class NewsItemDetailHeader extends React.PureComponent {
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
      <Touchable onPress={NavigationService.back}>
        <View>
          <Feather
            size={30}
            name="chevron-left"
            color={theme.primary[500]}
          />
        </View>
      </Touchable>
      <Txt style={{ fontSize: 22, fontWeight: '600' }}>
        News Item Detail
      </Txt>
      <View style={{ width: 25 }} />
      {/* <Entypo
        name="magnifying-glass"
        color={theme.primary[500]}
        size={25}
      /> */}
    </View>
    );
  }
}

export default NewsItemDetailHeader;