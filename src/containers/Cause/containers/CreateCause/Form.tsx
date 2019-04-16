import React from 'react';
import { View } from 'react-native';
import { reduxForm, InjectedFormProps } from 'redux-form';
import Input from 'components/Input';
import Field from 'components/Field';
import FormFlow from 'components/FormFlow';
import MarginWrapper from 'components/Field/MarginWrapper';
import Button from 'components/Button';
import { BlurViewProps } from 'expo';

export const CREATE_CAUSE_FORM_NAME = 'create_cause';

export interface ICreateCauseFormData {
  cause: string;
}

interface ICreateCauseFormProps {
  onSubmit: () => any;
}

type TCreateCauseFormProps = ICreateCauseFormProps & InjectedFormProps<ICreateCauseFormData, ICreateCauseFormProps>;

const blurViewProps: BlurViewProps = {
  tint: 'light',
  intensity: 30
};

export class CreateCauseForm extends FormFlow<TCreateCauseFormProps> {
  render() {
    const { submitting, onSubmit, handleSubmit } = this.props;
    return (
      <View>
        <MarginWrapper>
          <Field
            component={Input}
            name="name"
            label="Name"
            tint="light"
            // onSubmitEditing={this.submitEditing('password')}
            spellCheck={false}
            autoCorrect={false}
            autoCapitalize="none"
            blurViewProps={blurViewProps}
          />
        </MarginWrapper>
        <Button
          variant="contained"
          color="primary"
          onPress={handleSubmit(onSubmit)}
          title="Create"
          showLoader={submitting}
        />
      </View>
    );
  }
}

export default reduxForm<ICreateCauseFormData, ICreateCauseFormProps>({
  form: CREATE_CAUSE_FORM_NAME
})(CreateCauseForm);
