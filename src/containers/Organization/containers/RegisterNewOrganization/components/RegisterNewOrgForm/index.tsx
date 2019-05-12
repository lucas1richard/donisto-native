import * as React from 'react';
import MyField from 'components/Field';
import Input from 'components/Input';
import { View } from 'react-native';
import { reduxForm, InjectedFormProps } from 'redux-form';
import theme from 'theme/iftheme';
import Button from 'components/Button';
import MarginWrapper from 'components/Field/MarginWrapper';

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
          <MarginWrapper>
            <MyField
              name="name"
              label="Name"
              component={Input}
              blurViewProps={{
                tint: 'light',
                intensity: 80
              }}
            />
          </MarginWrapper>
          <MarginWrapper>
            <MyField
              name="city"
              label="City"
              component={Input}
              blurViewProps={{
                tint: 'light',
                intensity: 80
              }}
            />
          </MarginWrapper>
          <MarginWrapper>
            <MyField
              name="state"
              label="State"
              component={Input}
              blurViewProps={{
                tint: 'light',
                intensity: 80
              }}
            />
          </MarginWrapper>
          <MarginWrapper>
            <MyField
              name="zip"
              label="Zip"
              component={Input}
              blurViewProps={{
                tint: 'light',
                intensity: 80
              }}
            />
          </MarginWrapper>
          <MarginWrapper>
            <MyField
              name="mission"
              label="Mission"
              multiLine
              component={Input}
              blurViewProps={{
                tint: 'light',
                intensity: 80
              }}
            />
          </MarginWrapper>
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
