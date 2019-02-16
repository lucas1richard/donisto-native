import React from 'react';
import { View, TextInput } from 'react-native';
import { IFieldPrimitiveProps } from 'components/FieldPrimitive';
import showToast from 'components/Toast';
import theme from 'theme/iftheme';
import { WrappedFieldProps } from 'redux-form';
import { BlurView } from 'expo';

export type TFieldLabels = 'fieldLabel'|'fieldLabelerror'|'fieldLabelactive'|'fieldLabelactive';
export type TInputLabels = 'inputStyle'|'inputStyleerror'|'inputStyleactive'|'inputStyleactive';
export type TTextLabels = 'textInputWrapper'|'textInputWrappererror'|'textInputWrapperactive'|'textInputWrapperactive';

export interface IStyleKeys {
  fieldLabelKey: TFieldLabels;
  inputStyleKey: TInputLabels;
  textInputWrapperKey: TTextLabels;
}

export interface IFieldPrimitiveProps {
  component: any;
  noToast?: boolean;
  validateAtLength?: number;
  input?: any;
  meta?: any;
  name: string;
  keyboardType?: string;
  label?: string;
}

class Input extends React.Component<WrappedFieldProps & IFieldPrimitiveProps> {
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

  render() {
    const {
      noMargin,
      style,
      input,
      innerRef,
      validateAtLength,
      specialError,
      showFloatingLabel,
      multiline,
      meta,
      icon,
      ...field
    } = this.props;
    // const {
    //   fieldLabelKey
    // } = this.styleKeys();

    const hasIcon = !!icon;

    return (
        <View>
          <BlurView tint="dark" intensity={80} style={{ borderRadius: theme.fontSize * 0.6 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              {hasIcon && (
                <View style={{ paddingLeft: theme.fontSize }}>
                  {icon}
                </View>
              )}
              <TextInput
                {...input}
                {...field}
                allowFontScaling={false}
                ref={innerRef}
                label={field.label}
                placeholder={field.label}
                placeholderTextColor="#bbb"
                value={input.value}
                onChangeText={input.onChange}
                tintColor={theme.green}
                style={{ color: '#fff', fontSize: theme.fontSize + 4, padding: theme.fontSize }}
                onBlur={this.onBlur}
                onFocus={this.onFocus}
                error={meta.submitFailed ? meta.error : ''}
                returnKeyType={field.returnKeyType || 'next'}
              />
            </View>
          </BlurView>
        </View>
    );
  }
}

export default Input;
