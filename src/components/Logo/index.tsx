import * as React from 'react';
import { View } from 'react-native';
import theme from 'theme/iftheme';

class Logo extends React.Component {
  render() {
    return (
      <View style={{ alignItems: 'center' }}>
        <View
          style={{
            height: 80,
            width: 80,
            borderRadius: 80,
            borderColor: theme.white,
            borderWidth: 4
          }}
        />
      </View>
    );
  }
}

export default Logo;
