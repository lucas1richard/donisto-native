import * as React from 'react';
import { View, ScrollView } from 'react-native';
import mapToProps from './mapToProps';
import Txt from 'components/Txt';
import theme from 'theme/iftheme';
import UpdateForm from './components/UpdateForm';
import LinkForm from './components/LinkForm';
import H3 from 'components/H3';
import Button from 'components/Button';
import { Feather } from '@expo/vector-icons';
import Touchable from 'components/Touchable';
import { IDeleteOrgLinksAction } from 'containers/Organization/actions';
import ScreenHeader from 'components/ScreenHeader';
import CausesSection from './components/CausesSection';
import BasicInfoSection from './components/BasicInfoSection';

export interface IOrgLandingPageProps {
  organization: IOrganization;
  causes: IOrgDetailCause[];
  viewCauseDetail: (uuid: string) => any;
  getDetail: () => any;
  createOrgLinks: () => any;
  updateOrg: (onComplete?: () => any) => any;
  deleteOrgLinks: (links: string[], orgUuid: string) => IDeleteOrgLinksAction;
}

export interface IOrgLandingPageState {
  displayForm: boolean;
  displayLinkForm: boolean;
}

class OrganizationLandingPage extends React.Component<IOrgLandingPageProps, IOrgLandingPageState> {
  state = {
    displayForm: false,
    displayLinkForm: false,
  };

  toggleForm = () => {
    this.setState((state) => ({ displayForm: !state.displayForm }));
  }

  toggleLinkForm = () => {
    this.setState((state) => ({ displayLinkForm: !state.displayLinkForm }));
  }

  componentDidMount() {
    this.props.getDetail();
  }

  get gallery(): any[] {
    return [];
  }

  render() {
    const {
      organization,
      updateOrg,
      createOrgLinks,
      deleteOrgLinks,
      causes,
      viewCauseDetail,
    } = this.props;

    const isMember = organization.contactIsMember;
    const { displayForm, displayLinkForm } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <ScreenHeader title={organization.name} />
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
              <BasicInfoSection
                mission={organization.mission}
                city={organization.city}
                state={organization.state}
                zip={organization.zip}
              />
            </View>
            <View style={{ marginBottom: theme.screenPadding }}>
              <H3 color="primary">
                Links:
              </H3>
              {organization.links && organization.links.map((link) => (
                <View key={link.uuid} style={{ padding: 3, borderWidth: 1, marginBottom: theme.screenPadding }}>
                  <Txt>
                    {link.label}
                  </Txt>
                  <Txt>
                    {link.description}
                  </Txt>
                  <Touchable onPress={() => deleteOrgLinks([link.uuid], organization.uuid)}>
                    <View style={{ alignItems: 'center' }}>
                      <Txt color="muted">
                        Delete
                      </Txt>
                    </View>
                  </Touchable>
                </View>
              ))}
              {displayLinkForm && (
                <LinkForm
                  onSubmit={createOrgLinks}
                  cancel={this.toggleLinkForm}
                />
              )}
              {isMember && !displayLinkForm && (
                <Touchable onPress={this.toggleLinkForm}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Feather
                      name="plus-circle"
                      size={30}
                      style={{ color: theme.primary[500], marginRight: 3 }}
                    />
                    <Txt color="primary">Add Link</Txt>
                  </View>
                </Touchable>
              )}
            </View>
            <View style={{ marginBottom: theme.screenPadding }}>
              <H3 color="primary">
                Gallery:
              </H3>
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
            <CausesSection
              causes={causes}
              viewCauseDetail={viewCauseDetail}
            />
            {isMember && (
              <View>
                <H3 color="primary">
                  Top Donors:
                </H3>
              </View>
            )}
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default mapToProps(OrganizationLandingPage);