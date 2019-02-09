import React from 'react';
import showToast from 'components/Toast';
import { WrappedFieldProps } from 'redux-form';

export type TFieldLabels = 'fieldLabel'|'fieldLabelerror'|'fieldLabelactive'|'fieldLabelactive';
export type TInputLabels = 'inputStyle'|'inputStyleerror'|'inputStyleactive'|'inputStyleactive';
export type TTextLabels = 'textInputWrapper'|'textInputWrappererror'|'textInputWrapperactive'|'textInputWrapperactive';

export interface IStyleKeys {
  fieldLabelKey: TFieldLabels;
  inputStyleKey: TInputLabels;
  textInputWrapperKey: TTextLabels;
}

export interface IFieldPrimitiveProps {
  noToast?: boolean;
  validateAtLength?: number;
  input?: any;
  meta?: any;
  [x: string]: any;
}

class FieldPrimitive extends React.Component<WrappedFieldProps & IFieldPrimitiveProps> {
  static defaultProps = {
    input: {
      value: '',
      onBlur: (): any => undefined,
      name: '_default',
      onChange: (): any => undefined,
      onDragStart: (): any => undefined,
      onDrop: (): any => undefined,
      onFocus: (): any => undefined
    },
    meta: {},
    noToast: false
    // validateAtLength: false
  };

  onBlur = () => {
    const { input, meta, noToast } = this.props;
    if (meta.error && !noToast) {
      const { error } = meta;
      const text = Array.isArray(error) ? error[0] : error;
      showToast({ text: `${text}` });
    }
    if (input && input.onBlur) {
      input.onBlur(input.value);
    }
  }

  onFocus = (ev: any) => {
    this.props.input.onFocus(ev);
  }

  styleKeys(): IStyleKeys {
    const {
      input,
      meta,
      validateAtLength
    } = this.props;

    let readyToShow;

    if (validateAtLength) {
      readyToShow = input.value.length === validateAtLength;
    } else {
      readyToShow = meta.touched || (input.value !== '' && meta.pristine);
    }

    const hasError = readyToShow && meta.invalid;
    const isValid = readyToShow && meta.valid;

    let status: ''|'error'|'active'|'valid' = '';
    if (hasError) {
      status = 'error';
    } else if (meta.active) {
      status = 'active';
    } else if (isValid) {
      status = 'valid';
    }

    const fieldLabelKey = `fieldLabel${status}` as TFieldLabels;
    const inputStyleKey = `inputStyle${status}` as TInputLabels;
    const textInputWrapperKey = `textInputWrapper${status}` as TTextLabels;

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

  render(): any {
    return undefined;
  }
}

export default FieldPrimitive;
