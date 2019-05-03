import React from 'react';
import { View } from 'react-native';
import MyField from 'components/Field';
import Input from 'components/Input';
import { reduxForm, InjectedFormProps } from 'redux-form';
import Button from 'components/Button';
import { BlurViewProps } from 'expo';
import { moneyMask } from 'utilities/masks';

export const CREATE_DONATION_FORM = 'create_donation_form';

const blurViewProps: BlurViewProps = {
  tint: 'light',
  intensity: 30
};

export interface ICreateDonationFormData {
  cause: string;
}

interface ICreateDonationFormProps {
  onSubmit: () => any;
}

type TCreateDonationFormProps = ICreateDonationFormProps & InjectedFormProps<ICreateDonationFormData, ICreateDonationFormProps>;

class CreateDonationForm extends React.Component<TCreateDonationFormProps> {
  render() {
    const { handleSubmit, onSubmit } = this.props;
    return (
      <View>
        <MyField
          component={Input}
          name="amount"
          placeholder="$0.00"
          format={moneyMask}
          blurViewProps={blurViewProps}
        />
        <Button
          title="Submit"
          variant="contained"
          color="primary"
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    );
  }
}

export default reduxForm<ICreateDonationFormData, ICreateDonationFormProps>({
  form: CREATE_DONATION_FORM
})(CreateDonationForm);