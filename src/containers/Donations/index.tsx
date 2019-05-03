import React from 'react';
import { View, ScrollView } from 'react-native';
import mapToProps from './mapToProps';
import Screen from 'components/Screen';
import Donation from './components/Donation';
import DonationsHeader from './components/Header';

interface IDonationsProps {
  donations: any[];
  viewDetail: (donationUuid: string) => any;
}

const images = [
  require('../../../assets/scenic-1.jpg'),
  require('../../../assets/happy-1.jpg'),
  require('../../../assets/scenic-2.jpg')
];

export class Donations extends React.Component<IDonationsProps> {
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
