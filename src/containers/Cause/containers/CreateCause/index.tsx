import React from 'react';
import { View } from 'react-native';
import Txt from 'components/Txt';
import CreateCauseForm from './Form';
import theme from 'theme/iftheme';
import mapToProps from './mapToProps';

interface ICreateCauseProps {
  createCause: () => any;
}

class CreateCause extends React.Component<ICreateCauseProps> {
  render() {
    const { createCause } = this.props;
    return (
      <View>
        <Txt style={{ fontSize: 22, fontWeight: '600' }}>
          Create Cause
        </Txt>
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