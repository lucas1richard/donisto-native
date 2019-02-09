import React from 'react';
import { View } from 'react-native';
import { reduxForm, InjectedFormProps } from 'redux-form';
import Input from 'components/Input';
import Field from 'components/Field';
import FormFlow from 'components/FormFlow';

export const LOGIN_FORM_NAME = 'login';

export interface ILoginFormData {
  email: string;
  password: string;
}

export class LoginForm extends FormFlow<InjectedFormProps<ILoginFormData>> {
  render() {
    return (
      <View>
        <Field
          component={Input}
          name="email"
          label="Enter your email"
          keyboardType="email-address"
          onSubmitEditing={this.submitEditing('password')}
        />
        <Field
          component={Input}
          name="password"
          label="Enter your password"
          secureTextEntry
          innerRef={this.registerField('password')}
        />
      </View>
    );
  }
}

export default reduxForm<ILoginFormData>({
  form: LOGIN_FORM_NAME
})(LoginForm);
