import React from 'react';
import { View } from 'react-native';
import Button from 'components/Button';
import { NavigationFocusInjectedProps } from 'react-navigation';
import theme from 'theme/iftheme';
import H1 from 'components/H1';
import H2 from 'components/H2';

class RegistrationContactType extends React.Component<NavigationFocusInjectedProps> {
  render() {
    return (
      <View style={{ padding: theme.screenPadding }}>
        <H1 color="primary">
          Tell us who you are
        </H1>
        <Button
          color="primary"
          title="I'm a Nonprofit"
          onPress={() => undefined}
        />
        <H2 color="secondary">OR</H2>
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
