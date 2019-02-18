import React from 'react';
import { View, ImageBackground } from 'react-native';
import { NavigationFocusInjectedProps } from 'react-navigation';
import Button from 'components/Button';
import Form from './components/Form';
import mapToProps from './mapToProps';
import Loader from 'components/Loader';
import logger from 'utilities/logger';
import FloatingHeader from 'components/FloatingHeader';
import H1 from 'components/H1';
import H2 from 'components/H2';
import Txt from 'components/Txt';
import JoinNowLink from 'components/JoinNowLink';

interface ILoginProps {
  login: () => undefined;
  submitting: boolean
}

const charityImg = require('../../../assets/onboarding-bg.png');

class Login extends React.Component<NavigationFocusInjectedProps<ILoginProps> & ILoginProps> {
  static navigationOptions = {
    header: <FloatingHeader noCloseOption />
  };

  render() {
    const { login, submitting } = this.props;
    logger.log(this.props, 'Login');
    return (
      <ImageBackground
        source={charityImg}
        style={{ height: '100%', justifyContent: 'space-between', paddingHorizontal: 12, paddingVertical: 12, backgroundColor: '#000' }}
        imageStyle={{ height: 800, overflow: 'hidden', flex: 1 }}
      >
        <View style={{ marginTop: 50 }}>
          <H1 color="light">
            Welcome back
          </H1>
          <H2 color="light">
            Log in with your account
          </H2>
        </View>
        <View>
          <Form onSubmit={() => undefined} />
        </View>
        <View>
          {submitting ? (
            <Loader />
          ) : (
            <Button
              variant="contained"
              color="primary"
              onPress={login}
              title="Login"
            />
          )}
        </View>
        <View style={{ alignItems: 'center' }}>
          <Txt color="light">
            Forgot Password?
          </Txt>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Txt color="light">
            By Proceeding, I agree to the
          </Txt>
          <Txt color="light">
            Terms of Use and Privacy Policy
          </Txt>
        </View>
        <JoinNowLink />
      </ImageBackground>
    );
  }
}

export default mapToProps(Login);
