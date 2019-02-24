import React from 'react';
import MyField from 'components/Field';
import Input from 'components/Input';
import { View } from 'react-native';
import { reduxForm, InjectedFormProps } from 'redux-form';
import theme from 'theme/iftheme';
import Button from 'components/Button';
import Loader from 'components/Loader';

export const RegisterNewOrgForm_FORM_NAME = 'RegisterNewOrgForm_FORM_NAME';

interface IRegisterNewOrgFormProps {
  registerNewOrg: () => any;
}

export interface IRegisterNewOrgFormData {
  name: string;
}

class RegisterNewOrgForm extends React.Component<IRegisterNewOrgFormProps & InjectedFormProps<IRegisterNewOrgFormData, IRegisterNewOrgFormProps>> {
  render() {
    const { registerNewOrg, submitting } = this.props;
    return (
      <View>
        <View style={{ marginBottom: theme.fs }}>
          <MyField
            name="name"
            label="Organization Name"
            component={Input}
            blurViewProps={{
              tint: 'light',
              intensity: 80
            }}
          />
        </View>
        {submitting ? <Loader /> : (
          <Button
            title="Register"
            onPress={registerNewOrg}
            color="primary"
            variant="contained"
          />
        )}
      </View>
    );
  }
}

export default reduxForm<IRegisterNewOrgFormData, IRegisterNewOrgFormProps>({
  form: RegisterNewOrgForm_FORM_NAME
})(RegisterNewOrgForm);
