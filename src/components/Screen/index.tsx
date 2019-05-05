import * as React from 'react';
import { SafeAreaView } from 'react-native';
import { SafeAreaViewProps } from 'react-navigation';

export interface IScreenProps {
  style?: SafeAreaViewProps
}

class Screen extends React.Component<IScreenProps> {
  render() {
    const { children, style = {} } = this.props;
    return (
      <SafeAreaView style={{flex: 1, ...style }}>
        {children}
      </SafeAreaView>
    );
  }
}

export default Screen;
