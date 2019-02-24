import React from 'react';
import { View } from 'react-native';
import Txt from 'components/Txt';
import RegisterNewOrgForm from './components/RegisterNewOrgForm';
import mapToProps from './mapToProps';

interface IRegisterNewOrgProps {
  registerNewOrg: () => any
}

class RegisterNewOrg extends React.Component<IRegisterNewOrgProps> {
  render() {
    const { registerNewOrg } = this.props;
    return (
      <View>
        <Txt>
          Register New Orgnization
        </Txt>
        <RegisterNewOrgForm
          registerNewOrg={registerNewOrg}
        />
      </View>
    );
  }
}

export default mapToProps(RegisterNewOrg);
