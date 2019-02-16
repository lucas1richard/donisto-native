import React from 'react';
import { View } from 'react-native';
import { reduxForm, InjectedFormProps } from 'redux-form';
import Input from 'components/Input';
import Field from 'components/Field';
import FormFlow from 'components/FormFlow';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import theme from 'theme/iftheme';

export const LOGIN_FORM_NAME = 'login';

export interface ILoginFormData {
  email: string;
  password: string;
}

export class LoginForm extends FormFlow<InjectedFormProps<ILoginFormData>> {
  render() {
    return (
      <View>
        <View style={{ marginBottom: 8 }}>
          <Field
            component={Input}
            icon={<MaterialCommunityIcons name="email" size={theme.fontSize * 1.2} color="#fff" />}
            name="email"
            label="Email"
            keyboardType="email-address"
            onSubmitEditing={this.submitEditing('password')}
          />
        </View>
        <View style={{ marginBottom: 8 }}>
          <Field
            component={Input}
            name="password"
            icon={<FontAwesome name="lock" size={theme.fontSize * 1.2} color="#fff" />}
            label="Password"
            secureTextEntry
            innerRef={this.registerField('password')}
          />
        </View>
      </View>
    );
  }
}

export default reduxForm<ILoginFormData>({
  form: LOGIN_FORM_NAME
})(LoginForm);
