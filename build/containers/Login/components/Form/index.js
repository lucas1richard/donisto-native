import * as React from 'react';
import { View } from 'react-native';
import { reduxForm } from 'redux-form';
import Input from 'components/Input';
import Field from 'components/Field';
import FormFlow from 'components/FormFlow';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import theme from 'theme/iftheme';
import MarginWrapper from 'components/Field/MarginWrapper';
import Button from 'components/Button';
export const LOGIN_FORM_NAME = 'login';
const EmailIcon = (React.createElement(MaterialCommunityIcons, { name: "email", size: theme.fontSize * 1.2, color: "#fff" }));
const LockIcon = (React.createElement(FontAwesome, { name: "lock", size: theme.fontSize * 1.2, color: "#fff" }));
const blurViewProps = {
    tint: 'dark',
    intensity: 80
};
export class LoginForm extends FormFlow {
    render() {
        const { submitting, onSubmit, handleSubmit } = this.props;
        return (React.createElement(View, null,
            React.createElement(MarginWrapper, null,
                React.createElement(Field, { component: Input, icon: EmailIcon, name: "email", label: "Email", keyboardType: "email-address", onSubmitEditing: this.submitEditing('password'), spellCheck: false, autoCorrect: false, autoCapitalize: "none", blurViewProps: blurViewProps })),
            React.createElement(MarginWrapper, null,
                React.createElement(Field, { component: Input, name: "password", icon: LockIcon, label: "Password", secureTextEntry: true, innerRef: this.registerField('password'), blurViewProps: blurViewProps })),
            React.createElement(Button, { variant: "contained", color: "primary", onPress: handleSubmit(onSubmit), title: "Log In", showLoader: submitting })));
    }
}
export default reduxForm({
    form: LOGIN_FORM_NAME,
    initialValues: {
        email: 'qqw@ww.ww',
        password: 'yay'
    }
})(LoginForm);
//# sourceMappingURL=index.js.map