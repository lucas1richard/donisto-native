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

export const UPDATE_ORG_FORM = 'update_org';

export interface IUpdateOrganizationData extends IOrganization.Basic {
}

interface IUpdateOrganizationProps {
  onSubmit: () => any;
  cancel: () => any;
}

type TUpdateOrganizationProps = IUpdateOrganizationProps & InjectedFormProps<IUpdateOrganizationData, IUpdateOrganizationProps>;

const blurViewProps: BlurViewProps = {
  tint: 'light',
  intensity: 30
};

export class UpdateOrganization extends FormFlow<TUpdateOrganizationProps> {
  render() {
    const { submitting, onSubmit, handleSubmit, cancel } = this.props;
    return (
      <View>
        <MarginWrapper>
          <Field
            component={Input}
            name="city"
            label="City"
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
            name="state"
            label="State"
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
            name="zip"
            label="Zip"
            tint="light"
            innerRef={this.registerField('zip')}
            onSubmitEditing={this.submitEditing('mission')}
            spellCheck={false}
            autoCorrect={false}
            autoCapitalize="none"
            blurViewProps={blurViewProps}
          />
        </MarginWrapper>
        <MarginWrapper>
          <Field
            name="mission"
            component={Input}
            multiLine
            tint="light"
            label="Mission"
            innerRef={this.registerField('mission')}
            blurViewProps={blurViewProps}
          />
        </MarginWrapper>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ width: submitting ? '100%' : '50%', paddingRight: theme.screenPadding / 2 }}>
            <Button
              variant="contained"
              color="primary"
              onPress={handleSubmit(onSubmit)}
              title="Update"
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

export default reduxForm<IUpdateOrganizationData, IUpdateOrganizationProps>({
  form: UPDATE_ORG_FORM
})(UpdateOrganization);
