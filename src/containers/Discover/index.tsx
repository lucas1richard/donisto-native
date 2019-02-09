import React from 'react';
import { Text } from 'react-native';
import mapToProps from './mapToProps';

interface IDiscoverProps {
}

export class Discover extends React.Component<IDiscoverProps> {
  render() {
    return (
      <Text>
        Discover component
      </Text>
    );
  }
}

export default mapToProps(Discover);
