import React from 'react';
import { View, Text } from 'react-native';
import mapToProps from './mapToProps';
import theme from 'theme/iftheme';
import { h1, h2 } from 'styles/Headings';

interface IContactProps {
  contact: ContactAttributes
}

class Contact extends React.Component<IContactProps> {
  render() {
    const { contact } = this.props;
    return (
      <View style={{ padding: theme.screenPadding, paddingTop: 30 }}>
        <Text style={h1()}>
          {contact.email}
        </Text>
        <Text style={h2()}>
          {contact.uuid}
        </Text>
      </View>
    );
  }
}

export default mapToProps(Contact);
