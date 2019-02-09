import React from 'react';
import { View, Text } from 'react-native';
import { h1 } from 'styles/Headings';

class Profile extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={h1()}>Profile</Text>
      </View>
    );
  }
}

export default Profile;
