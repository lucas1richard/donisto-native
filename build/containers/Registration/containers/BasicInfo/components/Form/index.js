import React from 'react';
import { View } from 'react-native';
import { reduxForm } from 'redux-form';
import Input from 'components/Input';
import MyField from 'components/Field';
import FormFlow from 'components/FormFlow';
export const REGISTRATION_BASICINFO_FORM_NAME = 'registration_basic_info';
export class RegistrationBasicInfoForm extends FormFlow {
    render() {
        return (React.createElement(View, null,
            React.createElement(MyField, { component: Input, name: "email", label: "Enter your email", keyboardType: "email-address", innerRef: this.registerField('email'), onSubmitEditing: this.submitEditing('password1') }),
            React.createElement(MyField, { component: Input, name: "password", label: "Enter a password", secureTextEntry: true, innerRef: this.registerField('password1'), onSubmitEditing: this.submitEditing('password2') }),
            React.createElement(MyField, { component: Input, name: "password-confirm", label: "Type the password again", secureTextEntry: true, innerRef: this.registerField('password2') })));
    }
}
export default reduxForm({
    form: REGISTRATION_BASICINFO_FORM_NAME
})(RegistrationBasicInfoForm);
//# sourceMappingURL=index.js.map