import React from 'react';
import { View } from 'react-native';
import { reduxForm, InjectedFormProps } from 'redux-form';
import Input from 'components/Input';
import MyField from 'components/Field';
import FormFlow from 'components/FormFlow';
import Button from 'components/Button';
import theme from 'theme/iftheme';
import logger from 'utilities/logger';

export const REGISTRATION_BASICINFO_FORM_NAME = 'registration_basic_info';

export interface IRegistrationFormData {
  email: string;
  password: string;
}

export interface IRegistrationFormProps {
  createContact(): any;
}

export class RegistrationBasicInfoForm extends FormFlow<IRegistrationFormProps & InjectedFormProps<IRegistrationFormData, IRegistrationFormProps>> {
  render() {
    const { createContact, submitting } = this.props;
    logger.log(submitting, 'RegistrationBasicInfoForm', 'yellow');
    return (
      <View>
        <View style={{ marginBottom: theme.fs }}>
          <MyField
            component={Input}
            name="email"
            label="Email"
            keyboardType="email-address"
            innerRef={this.registerField('email')}
            autoCapitalize="none"
            autoCorrect={false}
            onSubmitEditing={this.submitEditing('password1')}
            blurViewProps={{
              tint: 'dark',
              intensity: 80
            }}
          />
        </View>
        <View style={{ marginBottom: theme.fs }}>
          <MyField
            component={Input}
            name="password"
            label="Password"
            secureTextEntry
            innerRef={this.registerField('password1')}
            blurViewProps={{
              tint: 'dark',
              intensity: 80
            }}
          />
        </View>
        {/* <MyField
          component={Input}
          name="password-confirm"
          label="Type the password again"
          secureTextEntry
          innerRef={this.registerField('password2')}
        /> */}
        <Button
          color="primary"
          variant="contained"
          title="Sign Up"
          onPress={createContact}
          showLoader={submitting}
        />
      </View>
    );
  }
}

export default reduxForm<IRegistrationFormData, IRegistrationFormProps>({
  form: REGISTRATION_BASICINFO_FORM_NAME
})(RegistrationBasicInfoForm);
