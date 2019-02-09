import React from 'react';
import { Text } from 'react-native';
import mapToProps from './mapToProps';

interface IMessagesProps {
}

export class Messages extends React.Component<IMessagesProps> {
  render() {
    return (
      <Text>
        Messages component
      </Text>
    );
  }
}

export default mapToProps(Messages);
