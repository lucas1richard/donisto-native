import * as React from 'react';
import { View, ScrollView } from 'react-native';
import RegisterNewOrgForm from './components/RegisterNewOrgForm';
import mapToProps from './mapToProps';
import theme from 'theme/iftheme';
import RegisterOrgHeader from './components/Header';

interface IRegisterNewOrgProps {
  registerNewOrg: () => any
}

class RegisterNewOrg extends React.Component<IRegisterNewOrgProps> {
  render() {
    const { registerNewOrg } = this.props;
    return (
      <View>
        <RegisterOrgHeader />
        <ScrollView>
          <View style={{ paddingHorizontal: theme.screenPadding }}>
            <RegisterNewOrgForm
              registerNewOrg={registerNewOrg}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default mapToProps(RegisterNewOrg);
