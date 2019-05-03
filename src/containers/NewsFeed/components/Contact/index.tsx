import * as React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class NewsFeedContact extends React.Component<any> {
  render() {
    return (
      <View style={styles.outerwrapper}>
        <View style={styles.wrapper} />
        <Text style={styles.namewrapper}>
          {this.props.name}
        </Text>
      </View>
    );
  }
}

export default NewsFeedContact;
