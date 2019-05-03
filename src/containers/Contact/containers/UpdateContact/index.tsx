import * as React from 'react';
import { View, ScrollView } from 'react-native';
import { NavigationFocusInjectedProps } from 'react-navigation';
import UpdateContactForm from './components/Form';
import theme from 'theme/iftheme';
import mapToProps from './mapToProps';
import UpdateContactHeader from './components/Header';

interface IUpdateContactProps extends NavigationFocusInjectedProps {
  contact: any;
  updateContact(): void;
}

class UpdateContact extends React.Component<IUpdateContactProps> {
  render() {
    const { updateContact, contact } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <UpdateContactHeader />
        <ScrollView contentContainerStyle={{ paddingHorizontal: theme.screenPadding, paddingTop: 20 }}>
          <View>
            <UpdateContactForm
              initialValues={contact}
              updateContact={updateContact}
            />
          </View>
          <View style={{ height: 50 }} />
        </ScrollView>
      </View>
    );
  }
}

export default mapToProps(UpdateContact);
