import React from 'react';
import { View } from 'react-native';
import { reduxForm, InjectedFormProps } from 'redux-form';
import Input from 'components/Input';
import MyField from 'components/Field';
import FormFlow from 'components/FormFlow';

export const REGISTRATION_BASICINFO_FORM_NAME = 'registration_basic_info';

export interface IRegistrationFormData {
  email: string;
  password: string;
}

type TRegistrationFormData = InjectedFormProps<IRegistrationFormData>;

export class RegistrationBasicInfoForm extends FormFlow<TRegistrationFormData> {
  render() {
    return (
      <View>
        <MyField
          component={Input}
          name="email"
          label="Enter your email"
          keyboardType="email-address"
          innerRef={this.registerField('email')}
          onSubmitEditing={this.submitEditing('password1')}
        />
        <MyField
          component={Input}
          name="password"
          label="Enter a password"
          secureTextEntry
          innerRef={this.registerField('password1')}
          onSubmitEditing={this.submitEditing('password2')}
        />
        <MyField
          component={Input}
          name="password-confirm"
          label="Type the password again"
          secureTextEntry
          innerRef={this.registerField('password2')}
        />
      </View>
    );
  }
}

export default reduxForm<IRegistrationFormData>({
  form: REGISTRATION_BASICINFO_FORM_NAME
})(RegistrationBasicInfoForm);
