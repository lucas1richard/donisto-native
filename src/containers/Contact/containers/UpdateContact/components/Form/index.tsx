import React from 'react';
import { View } from 'react-native';
import { reduxForm, InjectedFormProps } from 'redux-form';
import Input from 'components/Input';
import Field from 'components/Field';
import FormFlow from 'components/FormFlow';
import { FontAwesome, MaterialCommunityIcons, MaterialIcons, Foundation } from '@expo/vector-icons';
import theme from 'theme/iftheme';

export const UPDATE_CONTACT_FORM_NAME = 'login';

export interface ILoginFormData {
  email: string;
  password: string;
}

export class UpdateContactForm extends FormFlow<InjectedFormProps<ILoginFormData>> {
  render() {
    return (
      <View>
        <View style={{ marginBottom: 8 }}>
          <Field
            component={Input}
            icon={<MaterialIcons name="person" size={theme.fs * 1.2} color="#fff" />}
            name="first_name"
            label="First name"
            onSubmitEditing={this.submitEditing('last_name')}
          />
        </View>
        <View style={{ marginBottom: 8 }}>
          <Field
            component={Input}
            icon={<MaterialIcons name="person" size={theme.fs * 1.2} color="#fff" />}
            name="last_name"
            label="Last name"
            onSubmitEditing={this.submitEditing('last_name')}
          />
        </View>
        <View style={{ marginBottom: 8 }}>
          <Field
            component={Input}
            icon={<MaterialCommunityIcons name="city" size={theme.fs * 1.2} color="#fff" />}
            name="city"
            label="City"
            onSubmitEditing={this.submitEditing('state')}
          />
        </View>
        <View style={{ marginBottom: 8 }}>
          <Field
            component={Input}
            name="state"
            icon={<Foundation name="map" size={theme.fs * 1.2} color="#fff" />}
            label="State"
            innerRef={this.registerField('state')}
            onSubmitEditing={this.submitEditing('zip')}
          />
        </View>
        <View style={{ marginBottom: 8 }}>
          <Field
            component={Input}
            name="zip"
            icon={<FontAwesome name="map-marker" size={theme.fs * 1.2} color="#fff" />}
            label="Zip"
            innerRef={this.registerField('zip')}
          />
        </View>
      </View>
    );
  }
}

export default reduxForm<ILoginFormData>({
  form: UPDATE_CONTACT_FORM_NAME
})(UpdateContactForm);
