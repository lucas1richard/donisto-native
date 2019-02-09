import React from 'react';
import RegistrationBasicInfoForm from './components/Form';
import { NavigationFocusInjectedProps } from 'react-navigation';

import { View, Text } from 'react-native';
import Button from 'components/Button';
import { h2 } from 'styles/Headings';
import theme from 'theme/iftheme';
// import NavigationService from 'containers/Navigation/NavigationService';
// import routeNames from 'containers/Navigation/routeNames';
import mapToProps from './mapToProps';

interface RegistrationBasicInfoProps {
  createContact: () => undefined
}

class RegistrationBasicInfo extends React.Component<NavigationFocusInjectedProps & RegistrationBasicInfoProps> {
  render() {
    const { createContact } = this.props;
    return (
      <View style={{ padding: 12, justifyContent: 'space-between', flex: 1 }}>
        <Text style={h2({ color: theme.secondary[500] })}>
          Provide account information
        </Text>
        <RegistrationBasicInfoForm />
        <Button
          color="primary"
          title="Next Step"
          onPress={createContact}
        />
      </View>
    );
  }
}

export default mapToProps(RegistrationBasicInfo);
