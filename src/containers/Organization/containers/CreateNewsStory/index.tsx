import React from 'react';
import { Text } from 'react-native';
import mapToProps from './mapToProps';

interface ICreateNewsStoryProps {
}

export class CreateNewsStory extends React.Component<ICreateNewsStoryProps> {
  render() {
    return (
      <Text>
        CreateNewsStory component
      </Text>
    );
  }
}

export default mapToProps(CreateNewsStory);
