import * as React from 'react';
import { View } from 'react-native';
import MessageItem from './MessageItem';
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
    title: `Michael Jones`,
    text: `Thank you so much!`
  });
}

class MessageList extends React.Component {
  render() {
    return (
      <View>
        {messages.map((message) => (
          <MessageItem key={message.id}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '82%' }}>
              <View>
                <Txt color="primary">
                  {message.title}
                </Txt>
                <Txt style={{ fontWeight: '600' }}>
                  {message.text}
                </Txt>
              </View>
              <View style={{ alignItems: 'center' }}>
                <Txt style={{ color: '#aaa' }}>
                  23
                </Txt>
                <Txt style={{ color: '#aaa' }}>
                  mins
                </Txt>
              </View>
            </View>
          </MessageItem>
        ))}
      </View>
    );
  }
}

export default MessageList;
