import React from 'react';
import { View, Text } from 'react-native';
import card from 'styles/Card';
import { h1 } from 'styles/Headings';
import MessageItem from './MessageItem';

class MessageList extends React.Component {
  render() {
    return (
      <View>
        <Text style={h1()}>Messages</Text>
        <MessageItem>
          <Text>Message 1</Text>
          <Text>From Person 1</Text>
        </MessageItem>
        <MessageItem>
          <Text>Message 2</Text>
          <Text>From Person 2</Text>
        </MessageItem>
        <MessageItem>
          <Text>Message 3</Text>
          <Text>From Person 3</Text>
        </MessageItem>
        <MessageItem>
          <Text>Message 4</Text>
          <Text>From Person 4</Text>
        </MessageItem>
        <MessageItem>
          <Text>Message 5</Text>
          <Text>From Person 5</Text>
        </MessageItem>
        <MessageItem>
          <Text>Message 6</Text>
          <Text>From Person 6</Text>
        </MessageItem>
        <MessageItem>
          <Text>Message 7</Text>
          <Text>From Person 7</Text>
        </MessageItem>
        <MessageItem>
          <Text>Message 8</Text>
          <Text>From Person 8</Text>
        </MessageItem>
        <MessageItem>
          <Text>Message 9</Text>
          <Text>From Person 9</Text>
        </MessageItem>
      </View>
    );
  }
}

export default MessageList;
