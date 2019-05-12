import * as React from 'react';
import { View } from 'react-native';
import { reduxForm, InjectedFormProps } from 'redux-form';
import Input from 'components/Input';
import Field from 'components/Field';
import FormFlow from 'components/FormFlow';
import MarginWrapper from 'components/Field/MarginWrapper';
import Button from 'components/Button';
import { BlurViewProps } from 'expo';
import theme from 'theme/iftheme';
import logger from 'utilities/logger';

export const ORG_LINK_FORM = 'org_link_form';

export interface IOrganizationLinkFormData extends IOrganizationLink {
}

interface IOrganizationLinkFormProps {
  onSubmit: () => any;
  cancel: () => any;
}

type TOrganizationLinkFormProps = IOrganizationLinkFormProps & InjectedFormProps<IOrganizationLinkFormData, IOrganizationLinkFormProps>;

const blurViewProps: BlurViewProps = {
  tint: 'light',
  intensity: 30
};

export class OrganizationLinkForm extends FormFlow<TOrganizationLinkFormProps> {
  render() {
    const { submitting, onSubmit, handleSubmit, cancel, valid } = this.props;
    logger.info(this.props, 'LinkForm');
    return (
      <View>
        <MarginWrapper>
          <Field
            component={Input}
            name="label"
            label="Label"
            tint="light"
            onSubmitEditing={this.submitEditing('state')}
            spellCheck={false}
            autoCorrect={false}
            blurViewProps={blurViewProps}
          />
        </MarginWrapper>
        <MarginWrapper>
          <Field
            component={Input}
            name="href"
            label="URL"
            tint="light"
            innerRef={this.registerField('state')}
            onSubmitEditing={this.submitEditing('zip')}
            spellCheck={false}
            autoCorrect={false}
            blurViewProps={blurViewProps}
          />
        </MarginWrapper>
        <MarginWrapper>
          <Field
            component={Input}
            name="description"
            label="Description"
            multiLine
            tint="light"
            innerRef={this.registerField('zip')}
            onSubmitEditing={this.submitEditing('mission')}
            spellCheck={false}
            autoCorrect={false}
            autoCapitalize="none"
            blurViewProps={blurViewProps}
          />
        </MarginWrapper>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ width: submitting ? '100%' : '50%', paddingRight: theme.screenPadding / 2 }}>
            <Button
              variant="contained"
              color="primary"
              disabled={!valid}
              onPress={handleSubmit(onSubmit)}
              title="Add"
              showLoader={submitting}
            />
          </View>
          {!submitting && (
            <View style={{ width: '50%', paddingLeft: theme.screenPadding / 2 }}>
              <Button
                variant="contained"
                color="default"
                onPress={cancel}
                title="Cancel"
                showLoader={submitting}
              />
            </View>
          )}
        </View>
      </View>
    );
  }
}

export default reduxForm<IOrganizationLinkFormData, IOrganizationLinkFormProps>({
  form: ORG_LINK_FORM,
  validate: (values) => {
    const errors: { [x: string]: string } = {};
    if (!values.label) errors.label = 'Required';
    if (!values.href) errors.href = 'Required';
    if (!values.description) errors.description = 'Required';
    return errors;
  }
})(OrganizationLinkForm);
