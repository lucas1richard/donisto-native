import React from 'react';
import { Text } from 'react-native';
import mapToProps from './mapToProps';

interface IFormProps {
}

export class Form extends React.Component<IFormProps> {
  render() {
    return (
      <Text>
        Form component
      </Text>
    );
  }
}

export default mapToProps(Form);
