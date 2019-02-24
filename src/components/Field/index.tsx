import React from 'react';
import { Field } from 'redux-form';
import { KeyboardTypeOptions, ReturnKeyTypeOptions } from 'react-native';
import { BlurViewProps } from 'expo';

interface MyFieldProps {
  component: any;
  name: string;
  secureTextEntry?: boolean;
  label?: string;
  multiLine?: boolean;
  maxLength?: number;
  numberOfLines?: number;
  keyboardType?: KeyboardTypeOptions;
  innerRef?: (el: React.ComponentType) => any;
  onSubmitEditing?: (el: any) => void;
  icon?: any;
  returnKeyType?: ReturnKeyTypeOptions;
  spellCheck?: boolean;
  autoCorrect?: boolean;
  autoCapitalize?: 'none'|'sentences'|'words'|'characters';
  tint?: 'light'|'dark';
  blurViewProps?: BlurViewProps;
}

class MyField extends React.Component<MyFieldProps> {
  render() {
    return (
      <Field
        {...this.props}
      />
    );
  }
}

export default MyField;
