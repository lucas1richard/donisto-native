import React from 'react';
import { ScrollView } from 'react-native';
import mapToProps from './mapToProps';
import H3 from 'components/H3';
import ContactHeading from './components/Heading';
import { NavigationFocusInjectedProps } from 'react-navigation';
import Donation from './components/Donation';
import Story from './components/Story';

interface IContactProps extends NavigationFocusInjectedProps {
  contact: ContactAttributes
}

class Contact extends React.Component<IContactProps> {
  render() {
    const { contact } = this.props;
    return (
      <ScrollView>
        <ContactHeading contact={contact} />
        <H3>Donations</H3>
        <ScrollView horizontal>
          <Donation title="Donation 1" />
          <Donation title="Donation 2" />
          <Donation title="Donation 3" />
          <Donation title="Donation 4" />
        </ScrollView>

        <H3>Stories</H3>
        <ScrollView horizontal>
          <Story title="Story 1" />
          <Story title="Story 2" />
          <Story title="Story 3" />
          <Story title="Story 4" />
        </ScrollView>
      </ScrollView>
    );
  }
}

export default mapToProps(Contact);
