import * as React from 'react';
import { View } from 'react-native';
import MyField from 'components/Field';
import Input from 'components/Input';
import { reduxForm, InjectedFormProps } from 'redux-form';
import theme from 'theme/iftheme';
import Button from 'components/Button';

export const CreateNewsStory_FORM_NAME = 'CreateNewsStory_FORM_NAME';

export interface ICreateNewsStoryFormProps {
  submitStory: () => any
}

export class CreateNewsStoryForm extends React.Component<ICreateNewsStoryFormProps & InjectedFormProps<any, ICreateNewsStoryFormProps>> {
  render() {
    const { submitStory, submitting } = this.props;
    return (
      <View>
        <View style={{ marginBottom: theme.fs }}>
          <MyField
            name="title"
            component={Input}
            tint="light"
            label="Title"
            blurViewProps={{
              tint: 'light',
              intensity: 80,
              style: { borderWidth: 1, borderColor: '#333' }
            }}
          />
        </View>
        <MyField
          name="story"
          component={Input}
          multiLine
          tint="light"
          label="Story"
          blurViewProps={{
            tint: 'light',
            intensity: 80,
            style: { borderWidth: 1, borderColor: '#333', marginBottom: theme.fs }
          }}
        />
        <Button
          title="Submit"
          color="primary"
          variant="rounded"
          onPress={submitStory}
          showLoader={submitting}
        />
      </View>
    );
  }
}

export default reduxForm<any, ICreateNewsStoryFormProps>({
  form: CreateNewsStory_FORM_NAME
})(CreateNewsStoryForm);
