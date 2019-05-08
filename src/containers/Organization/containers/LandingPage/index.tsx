import * as React from 'react';
import { View, ScrollView } from 'react-native';
import mapToProps from './mapToProps';
import Txt from 'components/Txt';
import OrgLandingPageHeader from './components/Header';
import theme from 'theme/iftheme';
import UpdateForm from './components/UpdateForm';
import H3 from 'components/H3';
import Button from 'components/Button';

export interface IOrgLandingPageProps {
  organization: IOrganization;
  getDetail: () => any;
  updateOrg: (onComplete?: () => any) => any;
}

export interface IOrgLandingPageState {
  displayForm: boolean;
}

class OrganizationLandingPage extends React.Component<IOrgLandingPageProps, IOrgLandingPageState> {
  state = {
    displayForm: false
  };

  toggleForm = () => {
    this.setState((state) => ({ displayForm: !state.displayForm }));
  }

  componentDidMount() {
    this.props.getDetail();
  }

  get location() {
    const { organization } = this.props;
    const { city, state, zip } = organization;
    const cityState = [];
    const cityStateZip = [];
    if (city) {
      cityState.push(city);
    }
    if (state) {
      cityState.push(state);
    }
    if (cityState.length > 0) {
      cityStateZip.push(cityState.join(', '));
    }
    if (zip) {
      cityStateZip.push(zip);
    }

    return cityStateZip.join(' ');
  }

  get links() {
    const { organization } = this.props;
    return organization.links || [{ label: 'No Links Yet', uuid: '1' }];
  }

  get gallery(): any[] {
    return [];
  }

  render() {
    const { organization, updateOrg } = this.props;
    const isMember = organization.contactIsMember;

    const { displayForm } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <OrgLandingPageHeader title={organization.name} />
        <ScrollView>

          <View style={{ paddingHorizontal: theme.screenPadding }}>
            <View style={{ marginBottom: theme.screenPadding }}>
              {(isMember && displayForm) && (
                <UpdateForm
                  onSubmit={() => updateOrg(this.toggleForm)}
                  initialValues={{ ...organization }}
                  cancel={this.toggleForm}
                />
              )}
              <H3 color="primary">
                Location:
              </H3>
              <Txt>
                {this.location}
              </Txt>
            </View>
            <View style={{ marginBottom: theme.screenPadding }}>
              <H3 color="primary">Mission Statement:</H3>
              <Txt>{organization.mission}</Txt>
            </View>
            <View style={{ marginBottom: theme.screenPadding }}>
              <H3 color="primary">Links:</H3>
              {this.links.map((link: any) => (
                <Txt key={link.uuid}>{link.label}</Txt>
              ))}
            </View>
            <View style={{ marginBottom: theme.screenPadding }}>
              <H3 color="primary">Gallery:</H3>
              {this.gallery.map((link: any) => (
                <Txt key={link.uuid}>{link.label}</Txt>
              ))}
              {isMember && (
                <Button
                  title="Update"
                  variant="contained"
                  color="primary"
                  onPress={this.toggleForm}
                />
              )}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default mapToProps(OrganizationLandingPage);