import React from 'react';
import { View } from 'react-native';
import { reduxForm } from 'redux-form';
import Input from 'components/Input';
import MyField from 'components/Field';
import FormFlow from 'components/FormFlow';
import Button from 'components/Button';
import theme from 'theme/iftheme';
import MarginWrapper from 'components/Field/MarginWrapper';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
export const REGISTRATION_BASICINFO_FORM_NAME = 'registration_basic_info';
const EmailIcon = (React.createElement(MaterialCommunityIcons, { name: "email", size: theme.fs * 1.2, color: "#fff" }));
const LockIcon = (React.createElement(FontAwesome, { name: "lock", size: theme.fs * 1.2, color: "#fff" }));
export class RegistrationBasicInfoForm extends FormFlow {
    render() {
        const { createContact, submitting } = this.props;
        return (React.createElement(View, null,
            React.createElement(MarginWrapper, null,
                React.createElement(MyField, { icon: EmailIcon, component: Input, name: "email", label: "Email", keyboardType: "email-address", innerRef: this.registerField('email'), autoCapitalize: "none", autoCorrect: false, onSubmitEditing: this.submitEditing('password1'), blurViewProps: {
                        tint: 'dark',
                        intensity: 80
                    } })),
            React.createElement(MarginWrapper, null,
                React.createElement(MyField, { icon: LockIcon, component: Input, name: "password", label: "Password", secureTextEntry: true, innerRef: this.registerField('password1'), blurViewProps: {
                        tint: 'dark',
                        intensity: 80
                    } })),
            React.createElement(Button, { color: "primary", variant: "contained", title: "Sign Up", onPress: createContact, showLoader: submitting })));
    }
}
export default reduxForm({
    form: REGISTRATION_BASICINFO_FORM_NAME
})(RegistrationBasicInfoForm);
//# sourceMappingURL=index.js.map