import React from 'react';
import { Text } from 'react-native';
import mapToProps from './mapToProps';

interface IDonationsProps {
}

export class Donations extends React.Component<IDonationsProps> {
  render() {
    return (
      <Text>
        Donations component
      </Text>
    );
  }
}

export default mapToProps(Donations);
