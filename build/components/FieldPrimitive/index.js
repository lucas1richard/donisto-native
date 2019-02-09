import React from 'react';
import showToast from 'components/Toast';
class FieldPrimitive extends React.Component {
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
        return undefined;
    }
}
FieldPrimitive.defaultProps = {
    input: {
        value: '_default',
        onBlur: () => undefined,
        name: '_default',
        onChange: () => undefined,
        onDragStart: () => undefined,
        onDrop: () => undefined,
        onFocus: () => undefined
    },
    meta: {},
    noToast: false
    // validateAtLength: false
};
export default FieldPrimitive;
//# sourceMappingURL=index.js.map