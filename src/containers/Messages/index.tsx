import React from 'react';
import { View, ScrollView } from 'react-native';
import MessageList from './components/MessageList';
import mapToProps from './mapToProps';

interface IMessagesProps {
}

export class Messages extends React.Component<IMessagesProps> {
  render() {
    return (
      <ScrollView>
        <View style={{ flex: 1 }}>
          <MessageList />
        </View>
      </ScrollView>
    );
  }
}

export default mapToProps(Messages);
