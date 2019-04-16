import React from 'react';
import { View, ScrollView } from 'react-native';
import mapToProps from './mapToProps';
import CreateNewsStoryForm from './components/CreateNewsStoryForm';
import theme from 'theme/iftheme';
import H2 from 'components/H2';
import { TCreateStoryStatus } from './reducer';
import Txt from 'components/Txt';

interface ICreateNewsStoryProps {
  submitStory: () => any;
  status: TCreateStoryStatus
}

export class CreateNewsStory extends React.Component<ICreateNewsStoryProps> {
  render() {
    const { submitStory, status } = this.props;
    return (
      <View style={{ height: '100%' }}>
        <ScrollView>
          <View style={{ padding: theme.screenPadding, paddingTop: 60 }}>
            <H2>Create News Story</H2>
            {status === 'editing' && (
              <CreateNewsStoryForm submitStory={submitStory} />
            )}
            {status === 'success' && (
              <Txt>
                Success
              </Txt>
            )}
            {status === 'fail' && (
              <Txt>
                Fail
              </Txt>
            )}
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default mapToProps(CreateNewsStory);
