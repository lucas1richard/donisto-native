import * as React from 'react';
import mapToProps from './mapToProps';
import H1 from 'components/H1';
import { View, ScrollView } from 'react-native';
import RegisterNewOrg from './containers/RegisterNewOrganization';
import theme from 'theme/iftheme';
import H2 from 'components/H2';
import Button from 'components/Button';
import NavigationService from 'containers/Navigation/NavigationService';
import routeNames from 'containers/Navigation/routeNames';

export interface IOrganizationProps {
  organizationUuid?: string;
  activeOrg?: IOrganization.Basic;
}

export class Organization extends React.Component<IOrganizationProps> {
  render() {
    const { activeOrg } = this.props;
    if (!activeOrg) {
      return (
        <View style={{ flex: 1 }}>
          <ScrollView>
            <View style={{ padding: theme.screenPadding }}>
              <H1>
                You're not associated to any organization yet
              </H1>
              <RegisterNewOrg />
              <Button
                title="Switch to Donor Mode"
                onPress={() => NavigationService.navigate(routeNames.LOGGED_IN)}
                color="secondary"
                variant="contained"
              />
            </View>
          </ScrollView>
        </View>
      );
    }
    return (
      <View style={{ padding: theme.screenPadding }}>
        <H1>
          Organization
        </H1>
        <H2>
          {activeOrg.name}
        </H2>
        <Button
          title="Switch to Donor Mode"
          onPress={() => NavigationService.navigate(routeNames.LOGGED_IN)}
          color="secondary"
          variant="contained"
        />
      </View>
    );
  }
}

export default mapToProps(Organization);
