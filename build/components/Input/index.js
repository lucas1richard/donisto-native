var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import * as React from 'react';
import { View, TextInput } from 'react-native';
// import showToast from 'components/Toast';
import theme from 'theme/iftheme';
import { BlurView } from 'expo';
class Input extends React.Component {
    constructor() {
        super(...arguments);
        this.onBlur = () => {
            const { input, meta, noToast } = this.props;
            if (meta.error && !noToast) {
                // const { error } = meta;
                // const text = Array.isArray(error) ? error[0] : error;
                // showToast({ text: `${text}` });
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
    get returnKeyType() {
        let type = this.props.returnKeyType || 'next';
        if (this.props.multiLine) {
            type = 'default';
        }
        return type;
    }
    render() {
        const _a = this.props, { style, input, innerRef, validateAtLength, specialError, showFloatingLabel, multiline, meta, tint, icon, blurViewProps } = _a, field = __rest(_a, ["style", "input", "innerRef", "validateAtLength", "specialError", "showFloatingLabel", "multiline", "meta", "tint", "icon", "blurViewProps"]);
        const hasIcon = !!icon;
        return (React.createElement(View, null,
            React.createElement(BlurView, Object.assign({}, blurViewProps, { intensity: 80, style: [{ borderRadius: theme.fs * 0.6 }, blurViewProps && blurViewProps.style] }),
                React.createElement(View, { style: { flexDirection: 'row', alignItems: 'center' } },
                    hasIcon && (React.createElement(View, { style: { paddingLeft: theme.fs, minWidth: theme.fs * 2 } }, icon)),
                    React.createElement(TextInput, Object.assign({}, input, field, { allowFontScaling: false, ref: innerRef, label: field.label, textAlignVertical: "center", placeholder: field.label, placeholderTextColor: blurViewProps && blurViewProps.tint === 'light' ? '#333' : "#bbb", value: input.value, onChangeText: input.onChange, multiline: field.multiLine, numberOfLines: field.multiLine ? 4 : 1, style: {
                            color: blurViewProps && blurViewProps.tint === 'light' ? '#000' : '#fff',
                            fontSize: 18,
                            flex: 14,
                            padding: theme.fs,
                            minHeight: field.multiLine ? theme.fs * 8 : undefined
                        }, onBlur: this.onBlur, onFocus: this.onFocus, error: meta.submitFailed ? meta.error : '', returnKeyType: this.returnKeyType }))))));
    }
}
export default Input;
//# sourceMappingURL=index.js.map