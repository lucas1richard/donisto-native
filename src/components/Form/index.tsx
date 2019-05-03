import * as React from 'react';
import { KeyboardAvoidingView } from 'react-native';

class Form extends React.Component {
  render() {
    const { children, ...rest } = this.props;
    return (
      <KeyboardAvoidingView
        keyboardVerticalOffset={0}
        behavior="position"
        {...rest}
      >
        {children}
      </KeyboardAvoidingView>
    );
  }
}

export default Form;
