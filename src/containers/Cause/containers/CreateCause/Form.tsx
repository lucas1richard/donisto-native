import * as React from 'react';
import { View } from 'react-native';
import { reduxForm, InjectedFormProps } from 'redux-form';
import Input from 'components/Input';
import Field from 'components/Field';
import FormFlow from 'components/FormFlow';
import MarginWrapper from 'components/Field/MarginWrapper';
import Button from 'components/Button';
import { BlurViewProps } from 'expo';
import { decimalMask } from 'utilities/masks';

export const CREATE_CAUSE_FORM_NAME = 'create_cause';

export namespace ICreateCauseForm {
  export interface Values {
    cause: string;
  }
  export interface BaseProps {
    onSubmit: () => any;
  }
  export interface Props extends BaseProps, InjectedFormProps<Values, BaseProps> {}
}

const blurViewProps: BlurViewProps = {
  tint: 'light',
  intensity: 30
};

export class CreateCauseForm extends FormFlow<ICreateCauseForm.Props> {
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
        <MarginWrapper>
          <Field
            component={Input}
            name="goal_amount"
            label="Goal Amount"
            tint="light"
            // onSubmitEditing={this.submitEditing('password')}
            format={decimalMask}
            keyboardType="decimal-pad"
            blurViewProps={blurViewProps}
          />
        </MarginWrapper>
        <MarginWrapper>
          <Field
            component={Input}
            name="suggested_amount"
            label="Suggested Donation Amount"
            tint="light"
            // onSubmitEditing={this.submitEditing('password')}
            format={decimalMask}
            keyboardType="decimal-pad"
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

export default reduxForm<ICreateCauseForm.Values, ICreateCauseForm.BaseProps>({
  form: CREATE_CAUSE_FORM_NAME
})(CreateCauseForm);
