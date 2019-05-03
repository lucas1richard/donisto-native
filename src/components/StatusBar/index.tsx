import * as React from 'react';
import {
  View,
  StyleSheet,
  StatusBar
} from 'react-native';

class StatusBarComponent extends React.PureComponent {
  render() {
    return (
      <View style={styles.statusBar}>
        <StatusBar barStyle="light-content" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  statusBar: {
    // opacity: 1,
    // zIndex: 150,
    // backgroundColor: 'transparent',
    // borderBottomWidth: 1,
    // borderBottomColor: theme.primary[500]
  }
});

export default StatusBarComponent;
