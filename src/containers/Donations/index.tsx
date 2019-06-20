import * as React from 'react';
import { View, ScrollView } from 'react-native';
import mapToProps from './mapToProps';
import Screen from 'components/Screen';
import Donation from './components/Donation';
import DonationsHeader from './components/Header';

export interface IDonationsProps {
  donations: IDonationDetail[];
  viewDetail: (donationUuid: string) => any;
  getCauseDetailsById: (ids: string[]) => any;
}

const images = [
  require('../../../assets/scenic-1.jpg'),
  require('../../../assets/happy-1.jpg'),
  require('../../../assets/scenic-2.jpg')
];

export class Donations extends React.Component<IDonationsProps> {
  componentDidMount() {
    const { donations, getCauseDetailsById } = this.props;
    const incompeteDonations = donations.filter((donation) => !donation.cause).map((donation) => donation.cause_uuid);
    if (incompeteDonations.length) {
      getCauseDetailsById(incompeteDonations);
    }
  }

  render() {
    const { donations, viewDetail } = this.props;
    return (
      <Screen>
        <View style={{ height: '100%' }}>
          <DonationsHeader />
          <ScrollView>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', padding: 7.5 }}>
              {donations.map((donation, ix) => (
                <Donation
                  key={donation.uuid}
                  img={images[ix % (images.length)]}
                  onPress={() => viewDetail(donation.uuid)}
                  donation={donation}
                />
              ))}
            </View>
          </ScrollView>
        </View>
      </Screen>
    );
  }
}

export default mapToProps(Donations);
