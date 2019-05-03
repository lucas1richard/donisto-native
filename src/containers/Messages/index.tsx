import * as React from 'react';
import { View, ScrollView } from 'react-native';
import MessageList from './components/MessageList';
import mapToProps from './mapToProps';
import Screen from 'components/Screen';
import { Entypo } from '@expo/vector-icons';
import theme from 'theme/iftheme';
import Txt from 'components/Txt';
// import H1 from 'components/H1';
// import RegisterNewOrganization from 'containers/Organization/containers/RegisterNewOrganization';
// import H2 from 'components/H2';
// import Button from 'components/Button';
// import NavigationService from 'containers/Navigation/NavigationService';
// import routeNames from 'containers/Navigation/routeNames';

export interface IMessagesProps {
}

export class Messages extends React.Component<IMessagesProps> {
  render() {
    return (
      <Screen>
        <View style={{
          height: 60,
          borderBottomWidth: 1,
          borderBottomColor: '#d3d3d3',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20
        }}>
          <Entypo
            name="plus"
            color={theme.primary[500]}
            size={25}
          />
          <Txt style={{ fontSize: 22, fontWeight: '600' }}>
            Messages
          </Txt>
          <Entypo
            name="magnifying-glass"
            color={theme.primary[500]}
            size={25}
          />
        </View>
        <ScrollView>
          <View style={{ flex: 1 }}>
            <MessageList />
          </View>
        </ScrollView>
      </Screen>
    );
  }
}

export default mapToProps(Messages);
