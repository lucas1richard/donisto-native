import * as React from 'react';
import { View } from 'react-native';
import { reduxForm, InjectedFormProps } from 'redux-form';
import Input from 'components/Input';
import Field from 'components/Field';
import FormFlow from 'components/FormFlow';
import { FontAwesome, MaterialCommunityIcons, MaterialIcons, Foundation } from '@expo/vector-icons';
import theme from 'theme/iftheme';
import MarginWrapper from 'components/Field/MarginWrapper';
import Button from 'components/Button';

export const UPDATE_CONTACT_FORM_NAME = 'login';

export interface IUpdateContactFormProps {
  updateContact(): any;
}

export interface IUpdateContactFormData {
  email: string;
  password: string;
}

export class UpdateContactForm extends FormFlow<IUpdateContactFormProps & InjectedFormProps<IUpdateContactFormData, IUpdateContactFormProps>> {
  render() {
    const { updateContact, submitting } = this.props;
    return (
      <View>
        <MarginWrapper>
          <Field
            component={Input}
            icon={<MaterialIcons name="person" size={theme.fs * 1.2} color="#fff" />}
            name="first_name"
            label="First name"
            onSubmitEditing={this.submitEditing('last_name')}
            blurViewProps={{
              tint: 'dark',
              intensity: 80
            }}
          />
        </MarginWrapper>
        <MarginWrapper>
          <Field
            component={Input}
            icon={<MaterialIcons name="person" size={theme.fs * 1.2} color="#fff" />}
            name="last_name"
            label="Last name"
            innerRef={this.registerField('last_name')}
            onSubmitEditing={this.submitEditing('city')}
            blurViewProps={{
              tint: 'dark',
              intensity: 80
            }}
          />
        </MarginWrapper>
        <MarginWrapper>
          <Field
            component={Input}
            icon={<MaterialCommunityIcons name="city" size={theme.fs * 1.2} color="#fff" />}
            name="city"
            label="City"
            innerRef={this.registerField('city')}
            onSubmitEditing={this.submitEditing('state')}
            blurViewProps={{
              tint: 'dark',
              intensity: 80
            }}
          />
        </MarginWrapper>
        <MarginWrapper>
          <Field
            component={Input}
            name="state"
            icon={<Foundation name="map" size={theme.fs * 1.2} color="#fff" />}
            label="State"
            innerRef={this.registerField('state')}
            onSubmitEditing={this.submitEditing('zip')}
            blurViewProps={{
              tint: 'dark',
              intensity: 80
            }}
          />
        </MarginWrapper>
        <MarginWrapper>
          <Field
            component={Input}
            name="zip"
            icon={<FontAwesome name="map-marker" size={theme.fs * 1.2} color="#fff" />}
            label="Zip"
            innerRef={this.registerField('zip')}
            blurViewProps={{
              tint: 'dark',
              intensity: 80
            }}
          />
        </MarginWrapper>
        <Button
          title="Update"
          color="primary"
          variant="contained"
          onPress={updateContact}
          showLoader={submitting}
        />
      </View>
    );
  }
}

export default reduxForm<IUpdateContactFormData, IUpdateContactFormProps>({
  form: UPDATE_CONTACT_FORM_NAME
})(UpdateContactForm);
