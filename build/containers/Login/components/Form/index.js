import React from 'react';
import { View } from 'react-native';
import { reduxForm } from 'redux-form';
import Input from 'components/Input';
import Field from 'components/Field';
import FormFlow from 'components/FormFlow';
export const LOGIN_FORM_NAME = 'login';
export class LoginForm extends FormFlow {
    render() {
        return (React.createElement(View, null,
            React.createElement(Field, { component: Input, name: "email", label: "Enter your email", keyboardType: "email-address", onSubmitEditing: this.submitEditing('password') }),
            React.createElement(Field, { component: Input, name: "password", label: "Enter your password", secureTextEntry: true, innerRef: this.registerField('password') })));
    }
}
export default reduxForm({
    form: LOGIN_FORM_NAME
})(LoginForm);
//# sourceMappingURL=index.js.map