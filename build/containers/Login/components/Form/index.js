import React from 'react';
import { View } from 'react-native';
import { reduxForm } from 'redux-form';
import Input from 'components/Input';
import Field from 'components/Field';
import FormFlow from 'components/FormFlow';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import theme from 'theme/iftheme';
export const LOGIN_FORM_NAME = 'login';
export class LoginForm extends FormFlow {
    render() {
        return (React.createElement(View, null,
            React.createElement(View, { style: { marginBottom: 8 } },
                React.createElement(Field, { component: Input, icon: React.createElement(MaterialCommunityIcons, { name: "email", size: theme.fontSize * 1.2, color: "#fff" }), name: "email", label: "Email", keyboardType: "email-address", onSubmitEditing: this.submitEditing('password'), spellCheck: false, autoCorrect: false, autoCapitalize: "none", blurViewProps: {
                        tint: 'dark',
                        intensity: 80
                    } })),
            React.createElement(View, { style: { marginBottom: 8 } },
                React.createElement(Field, { component: Input, name: "password", icon: React.createElement(FontAwesome, { name: "lock", size: theme.fontSize * 1.2, color: "#fff" }), label: "Password", secureTextEntry: true, innerRef: this.registerField('password'), blurViewProps: {
                        tint: 'dark',
                        intensity: 80
                    } }))));
    }
}
export default reduxForm({
    form: LOGIN_FORM_NAME
})(LoginForm);
//# sourceMappingURL=index.js.map