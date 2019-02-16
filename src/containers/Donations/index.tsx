import React from 'react';
import { Text, View } from 'react-native';
import mapToProps from './mapToProps';
import { h1 } from 'styles/Headings';

interface IDonationsProps {
}

export class Donations extends React.Component<IDonationsProps> {
  render() {
    return (
      <View  style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={h1()}>
          My Donations
        </Text>
      </View>
    );
  }
}

export default mapToProps(Donations);
