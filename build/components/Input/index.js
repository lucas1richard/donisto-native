var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import React from 'react';
import { View, TextInput } from 'react-native';
import showToast from 'components/Toast';
import theme from 'theme/iftheme';
import { BlurView } from 'expo';
class Input extends React.Component {
    constructor() {
        super(...arguments);
        this.onBlur = () => {
            const { input, meta, noToast } = this.props;
            if (meta.error && !noToast) {
                const { error } = meta;
                const text = Array.isArray(error) ? error[0] : error;
                showToast({ text: `${text}` });
            }
            if (input && input.onBlur) {
                input.onBlur(input.value);
            }
        };
        this.onFocus = (ev) => {
            this.props.input.onFocus(ev);
        };
    }
    styleKeys() {
        const { input, meta, validateAtLength } = this.props;
        let readyToShow;
        if (validateAtLength) {
            readyToShow = input.value.length === validateAtLength;
        }
        else {
            readyToShow = meta.touched || (input.value !== '' && meta.pristine);
        }
        const hasError = readyToShow && meta.invalid;
        const isValid = readyToShow && meta.valid;
        let status = '';
        if (hasError) {
            status = 'error';
        }
        else if (meta.active) {
            status = 'active';
        }
        else if (isValid) {
            status = 'valid';
        }
        const fieldLabelKey = `fieldLabel${status}`;
        const inputStyleKey = `inputStyle${status}`;
        const textInputWrapperKey = `textInputWrapper${status}`;
        /**
         * These keys are the same as keys in styles.js
         * files for components which extend FieldPrimitive
         */
        return {
            fieldLabelKey,
            inputStyleKey,
            textInputWrapperKey
        };
    }
    render() {
        const _a = this.props, { noMargin, style, input, innerRef, validateAtLength, specialError, showFloatingLabel, multiline, meta, icon } = _a, field = __rest(_a, ["noMargin", "style", "input", "innerRef", "validateAtLength", "specialError", "showFloatingLabel", "multiline", "meta", "icon"]);
        // const {
        //   fieldLabelKey
        // } = this.styleKeys();
        const hasIcon = !!icon;
        return (React.createElement(View, null,
            React.createElement(BlurView, { tint: "dark", intensity: 80, style: { borderRadius: theme.fontSize * 0.6 } },
                React.createElement(View, { style: { flexDirection: 'row', alignItems: 'center' } },
                    hasIcon && (React.createElement(View, { style: { paddingLeft: theme.fontSize } }, icon)),
                    React.createElement(TextInput, Object.assign({}, input, field, { allowFontScaling: false, ref: innerRef, label: field.label, placeholder: field.label, placeholderTextColor: "#bbb", value: input.value, onChangeText: input.onChange, tintColor: theme.green, style: { color: '#fff', fontSize: theme.fontSize + 4, padding: theme.fontSize }, onBlur: this.onBlur, onFocus: this.onFocus, error: meta.submitFailed ? meta.error : '', returnKeyType: field.returnKeyType || 'next' }))))));
    }
}
export default Input;
//# sourceMappingURL=index.js.map