import * as React from 'react';
import { View, ScrollView } from 'react-native';
import mapToProps from './mapToProps';
import CreateNewsStoryForm from './components/CreateNewsStoryForm';
import theme from 'theme/iftheme';
import { TCreateStoryStatus } from './reducer';
import Txt from 'components/Txt';
import CreateNewsStoryHeader from './components/Header';

export interface ICreateNewsStoryProps {
  submitStory: () => any;
  status: TCreateStoryStatus
}

export class CreateNewsStory extends React.Component<ICreateNewsStoryProps> {
  render() {
    const { submitStory, status } = this.props;
    return (
      <View style={{ height: '100%' }}>
        <CreateNewsStoryHeader />
        <ScrollView>
          <View style={{ padding: theme.screenPadding }}>
            {status === 'editing' && (
              <CreateNewsStoryForm submitStory={submitStory} />
            )}
            {status === 'success' && (
              <Txt style={{ color: '#00ff00' }}>
                Success
              </Txt>
            )}
            {status === 'fail' && (
              <Txt style={{ color: '#ff0000' }}>
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
