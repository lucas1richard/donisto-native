import * as React from 'react';
import { View, ImageBackground } from 'react-native';
import { NavigationFocusInjectedProps } from 'react-navigation';
import Form from './components/Form';
import mapToProps from './mapToProps';
import logger from 'utilities/logger';
import FloatingHeader from 'components/FloatingHeader';
import H1 from 'components/H1';
import Txt from 'components/Txt';
import JoinNowLink from 'components/JoinNowLink';
import TOSandPrivacy from 'components/TOSandPrivacy';
import styles from './styles';

interface ILoginProps {
  login: () => undefined;
  submitting: boolean;
}

const charityImg = require('../../../assets/onboarding-bg.png');

class Login extends React.Component<NavigationFocusInjectedProps<ILoginProps> & ILoginProps> {
  static navigationOptions = {
    header: <FloatingHeader noCloseOption />
  };

  render() {
    const { login } = this.props;
    logger.log(this.props, 'Login');
    return (
      <ImageBackground
        source={charityImg}
        style={styles.imgBackground}
        imageStyle={styles.imgStyle}
      >
        <View style={{ marginTop: 50 }}>
          <H1 color="light">
            Welcome back
          </H1>
          <View style={{ marginTop: 12, alignItems: 'center' }}>
            <Txt color="light">
              Log in with your account
            </Txt>
          </View>
        </View>
        <View>
          <Form onSubmit={login} />
        </View>
        <View style={{ alignItems: 'center' }}>
          <Txt color="light">
            Forgot Password?
          </Txt>
        </View>
        <TOSandPrivacy />
        <JoinNowLink />
      </ImageBackground>
    );
  }
}

export default mapToProps(Login);
