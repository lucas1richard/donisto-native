import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { View } from 'react-native';
import Touchable from 'components/Touchable';
import NavigationService from 'containers/Navigation/NavigationService';
import routeNames from 'containers/Navigation/routeNames';

const padding = 18;

class MessageItem extends React.Component<any> {
  render() {
    const { children } = this.props;
    return (
      <Touchable onPress={() => NavigationService.navigate(routeNames.MESSAGES_SPECIFIC)}>
        <View style={{ paddingTop: padding, paddingLeft: padding }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ marginRight: 18 }}>
              <FontAwesome name="user" size={30} />
            </View>
            <View style={{ borderBottomWidth: 1, paddingBottom: padding, borderBottomColor: '#f0f0f0', paddingRight: padding }}>
              {children}
            </View>
          </View>
        </View>
      </Touchable>
    );
  }
}

export default MessageItem;
