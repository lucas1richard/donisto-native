import * as React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export interface NewsFeedContactProps {
  name: string;
}

class NewsFeedContact extends React.Component<NewsFeedContactProps> {
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
