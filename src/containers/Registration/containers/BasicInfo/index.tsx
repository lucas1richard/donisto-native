import React from 'react';
import RegistrationBasicInfoForm from './components/Form';
import { NavigationFocusInjectedProps } from 'react-navigation';

import { View, ImageBackground } from 'react-native';
import Button from 'components/Button';
import theme from 'theme/iftheme';
import mapToProps from './mapToProps';
import H1 from 'components/H1';
import H2 from 'components/H2';
import Txt from 'components/Txt';
import LoginLink from 'components/LoginLink';

interface RegistrationBasicInfoProps {
  createContact: () => undefined
}

const charityImg = require('../../../../../assets/onboarding-bg.png');

class RegistrationBasicInfo extends React.Component<NavigationFocusInjectedProps & RegistrationBasicInfoProps> {
  render() {
    const { createContact } = this.props;
    return (
      <ImageBackground
        source={charityImg}
        style={{
          height: '100%',
          justifyContent: 'space-between',
          paddingHorizontal: theme.screenPadding,
          paddingVertical: theme.screenPadding,
          backgroundColor: '#000'
        }}
        imageStyle={{ height: 800, overflow: 'hidden', flex: 1 }}
      >
        <View style={{ justifyContent: 'space-between', flex: 1, paddingTop: 50 }}>
          <H1 color="light">
            Create Account
          </H1>
          <H2 color="light">
            and start meeting new friends around the world
          </H2>
          <RegistrationBasicInfoForm createContact={createContact} />
          <View style={{ alignItems: 'center' }}>
            <Txt color="light">
              By Proceeding, I agree to the
            </Txt>
            <Txt color="light">
              Terms of Use and Privacy Policy
            </Txt>
          </View>
          <LoginLink />
        </View>
      </ImageBackground>
    );
  }
}

export default mapToProps(RegistrationBasicInfo);
