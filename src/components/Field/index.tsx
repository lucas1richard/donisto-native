import React from 'react';
import { Field } from 'redux-form';

interface MyFieldProps {
  component: any;
  name: string;
  secureTextEntry?: boolean;
  label?: string;
  keyboardType?: string;
  innerRef?: (el: React.ComponentType) => any;
  onSubmitEditing?: (el: any) => void
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
