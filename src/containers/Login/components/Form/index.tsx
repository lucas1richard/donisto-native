import * as React from 'react';
import { View } from 'react-native';
import { reduxForm, InjectedFormProps } from 'redux-form';
import Input from 'components/Input';
import Field from 'components/Field';
import FormFlow from 'components/FormFlow';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import theme from 'theme/iftheme';
import MarginWrapper from 'components/Field/MarginWrapper';
import Button from 'components/Button';
import { BlurViewProps } from 'expo';

export const LOGIN_FORM_NAME = 'login';

export interface ILoginFormData {
  email: string;
  password: string;
}

export interface ILoginFormProps {
  onSubmit(): any;
}

export type TLoginFormProps = ILoginFormProps & InjectedFormProps<ILoginFormData, ILoginFormProps>;

const EmailIcon = (
  <MaterialCommunityIcons
    name="email"
    size={theme.fontSize * 1.2}
    color="#fff"
  />
);
const LockIcon = (
  <FontAwesome
    name="lock"
    size={theme.fontSize * 1.2}
    color="#fff"
  />
);

const blurViewProps: BlurViewProps = {
  tint: 'dark',
  intensity: 80
};

export class LoginForm extends FormFlow<TLoginFormProps> {
  render() {
    const { submitting, onSubmit, handleSubmit } = this.props;
    return (
      <View>
        <MarginWrapper>
          <Field
            component={Input}
            icon={EmailIcon}
            name="email"
            label="Email"
            keyboardType="email-address"
            onSubmitEditing={this.submitEditing('password')}
            spellCheck={false}
            autoCorrect={false}
            autoCapitalize="none"
            blurViewProps={blurViewProps}
          />
        </MarginWrapper>
        <MarginWrapper>
          <Field
            component={Input}
            name="password"
            icon={LockIcon}
            label="Password"
            secureTextEntry
            innerRef={this.registerField('password')}
            blurViewProps={blurViewProps}
          />
        </MarginWrapper>
        <Button
          variant="contained"
          color="primary"
          onPress={handleSubmit(onSubmit)}
          title="Log In"
          showLoader={submitting}
        />
      </View>
    );
  }
}

export default reduxForm<ILoginFormData, ILoginFormProps>({
  form: LOGIN_FORM_NAME,
  initialValues: {
    email: 'qqz@zz.zz',
    password: 'yay'
  }
})(LoginForm);
