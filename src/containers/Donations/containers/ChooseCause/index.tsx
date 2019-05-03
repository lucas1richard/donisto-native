import * as React from 'react';
import { View, ScrollView } from 'react-native';
import Txt from 'components/Txt';
import Button from 'components/Button';
import NavigationService from 'containers/Navigation/NavigationService';
import routeNames from 'containers/Navigation/routeNames';
import Screen from 'components/Screen';
import theme from 'theme/iftheme';
import mapToProps from './mapToProps';
import Touchable from 'components/Touchable';
import H1 from 'components/H1';

const navCreateDonations = () => {
  NavigationService.navigate(routeNames.DONATIONS_CREATE);
};

interface IDonationChooseCauseProps {
  causes: any[];
  selectCause: (causeUuid: string) => any;
}

class DonationsChooseCause extends React.Component<IDonationChooseCauseProps> {
  pressCause = (causeUuid: string) => () => {
    this.props.selectCause(causeUuid);
    navCreateDonations();
  }

  render() {
    const { causes } = this.props;
    return (
      <Screen>
        <ScrollView>
          <View style={{ flex: 1, marginTop: 60, paddingHorizontal: theme.screenPadding }}>
            <H1>
              Choose Cause
            </H1>
            {causes.map((cause) => (
              <Touchable key={cause.id} onPress={this.pressCause(cause.uuid)}>
                <View style={{ marginVertical: theme.screenPadding / 2, borderWidth: 1, padding: theme.screenPadding }}>
                  <Txt>{cause.name}</Txt>
                </View>
              </Touchable>
            ))}
            <Button
              title="Create Donation"
              variant="contained"
              color="primary"
              onPress={navCreateDonations}
            />
          </View>
        </ScrollView>
      </Screen>
    );
  }
}

export default mapToProps(DonationsChooseCause);