import * as React from 'react';
import { View } from 'react-native';
import Txt from 'components/Txt';
import Screen from 'components/Screen';
import CreateDonationForm from './Form';
import mapToProps from './mapToProps';

interface ICreateDonationProps {
  createDonation: () => any
}

class CreateDonation extends React.Component<ICreateDonationProps> {
  render() {
    return (
      <Screen>
        <View>
          <Txt>
            Create Donation
          </Txt>
          <CreateDonationForm
            onSubmit={this.props.createDonation}
          />
        </View>
      </Screen>
    );
  }
}

export default mapToProps(CreateDonation);