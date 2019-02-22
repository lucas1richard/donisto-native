import React from 'react';
import { Text } from 'react-native';
import mapToProps from './mapToProps';

interface IOrganizationProps {
}

export class Organization extends React.Component<IOrganizationProps> {
  render() {
    return (
      <Text>
        Organization component
      </Text>
    );
  }
}

export default mapToProps(Organization);
