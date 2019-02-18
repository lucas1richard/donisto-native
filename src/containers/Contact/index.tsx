import React from 'react';
import { View, ScrollView } from 'react-native';
import mapToProps from './mapToProps';
import theme from 'theme/iftheme';
import H2 from 'components/H2';
import H3 from 'components/H3';
import Touchable from 'components/Touchable';
import ContactHeading from './components/Heading';
import { NavigationFocusInjectedProps } from 'react-navigation';

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
          <View style={{ width: theme.fontSize * 12, height: theme.fontSize * 12, padding: theme.fontSize }}>
            <Touchable>
              <View style={{ height: '100%', width: '100%', backgroundColor: 'red', alignItems: 'center', justifyContent: 'center' }}>
                <H2 color="light">Donation 1</H2>
              </View>
            </Touchable>
          </View>
          <View style={{ width: theme.fontSize * 12, height: theme.fontSize * 12, padding: theme.fontSize }}>
            <Touchable>
              <View style={{ height: '100%', width: '100%', backgroundColor: 'orange', alignItems: 'center', justifyContent: 'center' }}>
                <H2 color="light">Donation 2</H2>
              </View>
            </Touchable>
          </View>
          <View style={{ width: theme.fontSize * 12, height: theme.fontSize * 12, padding: theme.fontSize }}>
            <Touchable>
              <View style={{ height: '100%', width: '100%', backgroundColor: 'yellow', alignItems: 'center', justifyContent: 'center' }}>
                <H2 color="light">Donation 3</H2>
              </View>
            </Touchable>
          </View>
          <View style={{ width: theme.fontSize * 12, height: theme.fontSize * 12, padding: theme.fontSize }}>
            <Touchable>
              <View style={{ height: '100%', width: '100%', backgroundColor: 'red', alignItems: 'center', justifyContent: 'center' }}>
                <H2 color="light">Donation 4</H2>
              </View>
            </Touchable>
          </View>
        </ScrollView>

        <H3>Stories</H3>
        <ScrollView horizontal>
          <View style={{ width: theme.fontSize * 18, height: theme.fontSize * 24, padding: theme.fontSize }}>
            <Touchable>
              <View style={{ height: '100%', width: '100%', backgroundColor: 'red', alignItems: 'center', justifyContent: 'center' }}>
                <H2 color="light">Story 1</H2>
              </View>
            </Touchable>
          </View>
          <View style={{ width: theme.fontSize * 18, height: theme.fontSize * 24, padding: theme.fontSize }}>
            <Touchable>
              <View style={{ height: '100%', width: '100%', backgroundColor: 'orange', alignItems: 'center', justifyContent: 'center' }}>
                <H2 color="light">Story 2</H2>
              </View>
            </Touchable>
          </View>
          <View style={{ width: theme.fontSize * 18, height: theme.fontSize * 24, padding: theme.fontSize }}>
            <Touchable>
              <View style={{ height: '100%', width: '100%', backgroundColor: 'yellow', alignItems: 'center', justifyContent: 'center' }}>
                <H2 color="light">Story 3</H2>
              </View>
            </Touchable>
          </View>
          <View style={{ width: theme.fontSize * 18, height: theme.fontSize * 24, padding: theme.fontSize }}>
            <Touchable>
              <View style={{ height: '100%', width: '100%', backgroundColor: 'red', alignItems: 'center', justifyContent: 'center' }}>
                <H2 color="light">Story 4</H2>
              </View>
            </Touchable>
          </View>
        </ScrollView>
      </ScrollView>
    );
  }
}

export default mapToProps(Contact);
