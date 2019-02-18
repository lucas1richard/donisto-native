import React from 'react';
import { View, ScrollView } from 'react-native';
import { NavigationFocusInjectedProps } from 'react-navigation';
import UpdateContactForm from './components/Form';
import theme from 'theme/iftheme';
import Button from 'components/Button';
import mapToProps from './mapToProps';
import H2 from 'components/H2';

interface IUpdateContactProps extends NavigationFocusInjectedProps {
  contact: any;
  updateContact(): void;
}

class UpdateContact extends React.Component<IUpdateContactProps> {
  render() {
    const { updateContact, contact } = this.props;
    console.log(updateContact);
    return (
      <View style={{ backgroundColor: '#888', flex: 1 }}>
        <ScrollView contentContainerStyle={{ backgroundColor: '#888', paddingHorizontal: theme.screenPadding, paddingTop: 50 }}>
          <View>
            <H2 color="light">Update Contact</H2>
            <UpdateContactForm initialValues={contact} />
            <Button
              title="Update"
              color="primary"
              variant="contained"
              onPress={updateContact}
            />
          </View>
          <View style={{ height: 50 }} />
        </ScrollView>
      </View>
    );
  }
}

export default mapToProps(UpdateContact);
