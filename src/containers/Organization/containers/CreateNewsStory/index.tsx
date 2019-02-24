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
      // <ImageBackground source={require('../../../../../assets/onboarding-bg.png')} style={{ width: '100%', flex: 1 }}>
      <View style={{ backgroundColor: '#eee', flex: 1 }}>
        <ScrollView>
          <View style={{ padding: theme.screenPadding }}>
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
      // </ImageBackground>
    );
  }
}

export default mapToProps(CreateNewsStory);
