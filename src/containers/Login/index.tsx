import React from 'react';
import { View, Text } from 'react-native';
import { NavigationFocusInjectedProps } from 'react-navigation';
import { h1, h2 } from 'styles/Headings';
import Button from 'components/Button';
import Form from './components/Form';
import mapToProps from './mapToProps';
import Loader from 'components/Loader';
import logger from 'utilities/logger';

interface ILoginProps {
  login: () => undefined;
  submitting: boolean
}

class Login extends React.Component<NavigationFocusInjectedProps<ILoginProps> & ILoginProps> {
  render() {
    const { login, submitting } = this.props;
    logger.log(this.props, 'Login');
    return (
      <View style={{ height: '100%', justifyContent: 'space-between', paddingHorizontal: 12, paddingVertical: 12 }}>
        <View>
          <Text style={h1()}>
            Account Login
          </Text>
          <Text style={h2()}>
            Enter Your Credentials Below
          </Text>
        </View>
        <View>
          <Form onSubmit={() => undefined} />
          <Text style={{ color: 'gray', textAlign: 'center' }}>
            I don&apos;t remember my password
          </Text>
        </View>
        <View>
          {submitting ? (
            <Loader />
          ) : (
            <Button
              color="primary"
              onPress={login}
              title="Yay"
            />
          )}
        </View>
      </View>
    );
  }
}

export default mapToProps(Login);
