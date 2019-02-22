import React from 'react';
import { View } from 'react-native';
import MessageItem from './MessageItem';
import H2 from 'components/H2';
import Txt from 'components/Txt';

interface IMessage {
  id: number;
  title: string;
  text: string;
}

const messages: IMessage[] = [];
for (let ix = 0; ix < 10; ix += 1) {
  messages.push({
    id: ix,
    title: `Message ${ix}`,
    text: `From Person ${ix}`
  });
}

class MessageList extends React.Component {
  render() {
    return (
      <View>
        <H2>Messages</H2>
        {messages.map((message) => (
          <MessageItem key={message.id}>
            <Txt>{message.title}</Txt>
            <Txt>{message.text}</Txt>
          </MessageItem>
        ))}
      </View>
    );
  }
}

export default MessageList;
