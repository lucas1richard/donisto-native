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
            React.createElement(View, { style: { marginBottom: 12 } },
                React.createElement(MyField, { component: Input, name: "email", label: "Email", keyboardType: "email-address", innerRef: this.registerField('email'), onSubmitEditing: this.submitEditing('password1') })),
            React.createElement(MyField, { component: Input, name: "password", label: "Password", secureTextEntry: true, innerRef: this.registerField('password1') })));
    }
}
export default reduxForm({
    form: REGISTRATION_BASICINFO_FORM_NAME
})(RegistrationBasicInfoForm);
//# sourceMappingURL=index.js.map