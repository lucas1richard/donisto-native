import * as React from 'react';
import MyField from 'components/Field';
import Input from 'components/Input';
import { View } from 'react-native';
import { reduxForm, InjectedFormProps } from 'redux-form';
import theme from 'theme/iftheme';
import Button from 'components/Button';

export const RegisterNewOrgForm_FORM_NAME = 'RegisterNewOrgForm_FORM_NAME';

export interface IRegisterNewOrgFormProps {
  registerNewOrg: () => any;
}

export interface IRegisterNewOrgFormData {
  name: string;
}

export type TRegisterNewOrgFormProps = IRegisterNewOrgFormProps & InjectedFormProps<IRegisterNewOrgFormData, IRegisterNewOrgFormProps>;

export class RegisterNewOrgForm extends React.Component<TRegisterNewOrgFormProps> {
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
        <Button
          title="Register"
          onPress={registerNewOrg}
          color="primary"
          variant="contained"
          showLoader={submitting}
        />
      </View>
    );
  }
}

export default reduxForm<IRegisterNewOrgFormData, IRegisterNewOrgFormProps>({
  form: RegisterNewOrgForm_FORM_NAME
})(RegisterNewOrgForm);
