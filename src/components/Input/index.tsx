import * as React from 'react';
import { View, TextInput } from 'react-native';
import { IFieldPrimitiveProps } from 'components/FieldPrimitive';
// import showToast from 'components/Toast';
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

export type TInputProps = WrappedFieldProps & IFieldPrimitiveProps;

class Input extends React.Component<TInputProps> {
  onBlur = () => {
    const { input, meta, noToast } = this.props;
    if (meta.error && !noToast) {
      // const { error } = meta;
      // const text = Array.isArray(error) ? error[0] : error;
      // showToast({ text: `${text}` });
    }
    if (input && input.onBlur) {
      input.onBlur(input.value);
    }
  }

  onFocus = (ev?: any) => {
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

  get returnKeyType() {
    let type = this.props.returnKeyType || 'next';
    if (this.props.multiLine) {
      type = 'default';
    }
    return type;
  }

  render() {
    const {
      style,
      input,
      innerRef,
      validateAtLength,
      specialError,
      showFloatingLabel,
      multiline,
      meta,
      tint,
      icon,
      blurViewProps,
      ...field
    } = this.props;

    const hasIcon = !!icon;

    return (
        <View>
          <BlurView {...blurViewProps} intensity={80} style={[{ borderRadius: theme.fs * 0.6 }, blurViewProps && blurViewProps.style]}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              {hasIcon && (
                <View style={{ paddingLeft: theme.fs, minWidth: theme.fs * 2 }}>
                  {icon}
                </View>
              )}
              <TextInput
                {...input}
                {...field}
                allowFontScaling={false}
                ref={innerRef}
                label={field.label}
                textAlignVertical="center"
                placeholder={field.label}
                placeholderTextColor={blurViewProps && blurViewProps.tint === 'light' ? '#333' : "#bbb"}
                value={input.value}
                onChangeText={input.onChange}
                multiline={field.multiLine}
                numberOfLines={field.multiLine ? 4 : 1}
                style={{
                  color: blurViewProps && blurViewProps.tint === 'light' ? '#000' : '#fff',
                  fontSize: 18,
                  flex: 14,
                  padding: theme.fs,
                  minHeight: field.multiLine ? theme.fs * 8 : undefined
                }}
                onBlur={this.onBlur}
                onFocus={this.onFocus}
                error={meta.submitFailed ? meta.error : ''}
                returnKeyType={this.returnKeyType}
              />
            </View>
          </BlurView>
        </View>
    );
  }
}

export default Input;
