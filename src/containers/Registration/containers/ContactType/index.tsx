import React from 'react';
import { View, Text } from 'react-native';
import Button from 'components/Button';
import { NavigationFocusInjectedProps } from 'react-navigation';
import { h2, h1 } from 'styles/Headings';
import theme from 'theme/iftheme';

class RegistrationContactType extends React.Component<NavigationFocusInjectedProps> {
  render() {
    return (
      <View style={{ padding: theme.screenPadding }}>
        <Text style={h1({ color: theme.primary[500]})}>
          Tell us who you are
        </Text>
        <Button
          color="primary"
          title="I'm a Nonprofit"
          onPress={() => undefined}
        />
        <Text style={h2({ color: theme.secondary[500]})}>OR</Text>
        <Button
          color="primary"
          title="I'm a Donor"
          onPress={() => undefined}
        />
      </View>
    );
  }
}

export default RegistrationContactType;
