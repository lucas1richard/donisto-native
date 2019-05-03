import * as React from 'react';
import { View, ActivityIndicator } from 'react-native';

function Loader() {
  return (
    <View style={{ alignItems: 'center' }}>
      <ActivityIndicator size="large" />
    </View>
  );
}

export default Loader;
