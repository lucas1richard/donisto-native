import React from 'react';
import { Text } from 'react-native';
import mapToProps from './mapToProps';

interface INonprofitProps {
}

export class Nonprofit extends React.Component<INonprofitProps> {
  render() {
    return (
      <Text>
        Nonprofit component
      </Text>
    );
  }
}

export default mapToProps(Nonprofit);
