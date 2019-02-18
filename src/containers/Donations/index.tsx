import React from 'react';
import { View } from 'react-native';
import mapToProps from './mapToProps';
import H1 from 'components/H1';

interface IDonationsProps {
}

export class Donations extends React.Component<IDonationsProps> {
  render() {
    return (
      <View  style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <H1>
          My Donations
        </H1>
      </View>
    );
  }
}

export default mapToProps(Donations);
