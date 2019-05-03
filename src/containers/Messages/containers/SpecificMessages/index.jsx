import React from 'react';
import { View } from 'react-native';
import Txt from 'components/Txt';
import SpecificMessageHeader from './components/Header';

class SpecificMessages extends React.Component {
  render() {
    return (
      <View>
        <SpecificMessageHeader />
        <Txt>
          Specific Messages
        </Txt>
      </View>
    );
  }
}

export default SpecificMessages;