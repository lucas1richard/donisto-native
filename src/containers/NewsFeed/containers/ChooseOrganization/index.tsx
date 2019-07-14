import * as React from 'react';
import { View, ScrollView } from 'react-native';
import Txt from 'components/Txt';
import mapToProps from './mapToProps';
import Card from 'components/Card';
import Touchable from 'components/Touchable';
import H1 from 'components/H1';
import NavigationService from 'containers/Navigation/NavigationService';
import routeNames from 'containers/Navigation/routeNames';

interface IChooseOrganizationProps {
  orgs: IOrganization.Basic[],
  selectOrg: (uuid: string) => any;
}

class ChooseOrganization extends React.Component<IChooseOrganizationProps> {
  render() {
    const { orgs, selectOrg } = this.props;
    return (
      <ScrollView>
        <View style={{ paddingTop: 60 }}>
          <H1>
            Select an Organization
          </H1>
          <Touchable onPress={() => NavigationService.navigate(routeNames.CREATE_NEWS_ITEM)}>
            <Card>
              <Txt>Post as Myself</Txt>
            </Card>
          </Touchable>
          {orgs.map((org) => (
            <Touchable
              key={org.uuid}
              onPress={() => selectOrg(org.uuid)}
            >
              <Card>
                <Txt>{org.name}</Txt>
              </Card>
            </Touchable>
          ))}
        </View>
      </ScrollView>
    );
  }
}

export default mapToProps(ChooseOrganization);