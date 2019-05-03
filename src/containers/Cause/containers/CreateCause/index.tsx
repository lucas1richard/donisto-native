import React from 'react';
import { View } from 'react-native';
import CreateCauseForm from './Form';
import theme from 'theme/iftheme';
import mapToProps from './mapToProps';
import CreateCauseHeader from './components/Header';

interface ICreateCauseProps {
  createCause: () => any;
}

class CreateCause extends React.Component<ICreateCauseProps> {
  render() {
    const { createCause } = this.props;
    return (
      <View>
        <CreateCauseHeader />
        <View style={{ paddingHorizontal: theme.screenPadding }}>
          <CreateCauseForm
            onSubmit={createCause}
          />
        </View>
      </View>
    );
  }
}

export default mapToProps(CreateCause);