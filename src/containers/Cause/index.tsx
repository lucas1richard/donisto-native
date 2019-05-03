import * as React from 'react';
import { Text } from 'react-native';
import mapToProps from './mapToProps';

interface ICauseProps {
}

export class Cause extends React.Component<ICauseProps> {
  render() {
    return (
      <Text>
        Cause component
      </Text>
    );
  }
}

export default mapToProps(Cause);
