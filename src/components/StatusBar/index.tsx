import React from 'react';
import { View, Platform, StyleSheet, StatusBar } from 'react-native';
import theme from 'theme/iftheme';

const STATUSBAR_HEIGHT = Platform.OS === 'ios'
  ? 20
  : StatusBar.currentHeight;

class StatusBarComponent extends React.PureComponent {
  render() {
    return (
      <View style={styles.statusBar}>
        <StatusBar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
    opacity: 1,
    zIndex: 150,
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderBottomColor: theme.primary[500]
  }
});

export default StatusBarComponent;
