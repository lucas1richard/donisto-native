import * as React from 'react';
import { View, ScrollView } from 'react-native';
import Txt from 'components/Txt';
import mapToProps from './mapToProps';
import theme from 'theme/iftheme';
import { moneyMask } from 'utilities/masks';
import H3 from 'components/H3';
import ScreenHeader from 'components/ScreenHeader';

export interface ICauseDetailProps {
  cause: ICause;
}

interface ItotalDonors {
  [x: string]: {
    total: number,
    info: IContact.Default,
    numDonations: number
  }
}

class CauseDetail extends React.Component<ICauseDetailProps> {
  get topDonors() {
    const { cause } = this.props;
    const { donations } = cause;
    const donors: ItotalDonors = donations.reduce((memo: ItotalDonors, donation) => {
      if (memo[donation.contact_uuid]) {
        memo[donation.contact_uuid].total += donation.amount;
        memo[donation.contact_uuid].numDonations += 1;
      } else {
        memo[donation.contact_uuid] = {
          total: donation.amount,
          info: donation.contact,
          numDonations: 1
        };
      }
      return memo;
    }, {});
    const totalDonors = Object.values(donors);
    totalDonors.sort((a, b) => {
      if (a.total > b.total) return -1;
      if (a.total < b.total) return 1;
      return 0;
    });
    return totalDonors.slice(0, 5);
  }

  render() {
    const { cause } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <ScreenHeader title={cause.name} />
        <ScrollView>
          <View style={{ paddingHorizontal: theme.screenPadding }}>
            <H3 color="primary">
              Top Donors
            </H3>
            {this.topDonors.map((donor, ix) => (
              <View key={donor.info ? donor.info.uuid : `anonymous_${ix}`}>
                {donor.info
                ? (
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, marginBottom: theme.screenPadding }}>
                    <Txt>
                      {donor.info.email}
                    </Txt>
                    <Txt>
                      {moneyMask(donor.total)}
                    </Txt>
                    <Txt>
                      {donor.numDonations}
                    </Txt>
                  </View>
                )
                : (
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, marginBottom: theme.screenPadding }}>
                    <Txt>
                    Anonymous
                    </Txt>
                    <Txt>
                      {moneyMask(donor.total)}
                    </Txt>
                    <Txt>
                      {donor.numDonations}
                    </Txt>
                  </View>
                )}
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default mapToProps(CauseDetail);