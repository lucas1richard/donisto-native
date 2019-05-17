import * as React from 'react';
import { View } from 'react-native';
import Txt from 'components/Txt';
import Screen from 'components/Screen';
import theme from 'theme/iftheme';
import CreateDonationForm from './Form';
import mapToProps from './mapToProps';

interface ICreateDonationProps {
  cause: ICause;
  createDonation: () => any;
}

class CreateDonation extends React.Component<ICreateDonationProps> {
  render() {
    const { cause } = this.props;
    return (
      <Screen>
        <View style={{ paddingTop: 60, paddingHorizontal: theme.screenPadding }}>
          <Txt>
            Create Donation
          </Txt>
          <CreateDonationForm
            onSubmit={this.props.createDonation}
          />
          <Txt>For Cause:</Txt>
          <Txt>
            {cause.name}
          </Txt>
          {cause.suggested_donation_amount && (
            <Txt>
              ${cause.suggested_donation_amount}
            </Txt>
          )}
        </View>
      </Screen>
    );
  }
}

export default mapToProps(CreateDonation);