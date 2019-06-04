import * as React from 'react';
import { View, ImageBackground } from 'react-native';
import theme from 'theme/iftheme';
import mapToProps from './mapToProps';
import { moneyMask } from 'utilities/masks';
import Badge from 'components/Badge';
import moment from 'moment';
import H1 from 'components/H1';
import Txt from 'components/Txt';
import styles from './styles';

export interface IDonationWithCauseAndOrg extends IDonationDetail {
  organization: IOrganization;
}

export interface IViewDonationProps {
  donation: IDonationWithCauseAndOrg
}

class ViewDonation extends React.Component<IViewDonationProps> {
  render() {
    const { donation } = this.props;
    return (
          <ImageBackground
            source={require('../../../../../assets/happy-1.jpg')}
            style={styles.ibStyle}
            imageStyle={styles.ibImageStyle}
          >
            <View style={styles.overlay}>
              <H1 color="light">
                {moneyMask(donation.amount)}
              </H1>
              {donation.cause && (
                <Badge label={donation.cause.name} />
              )}
              {donation.organization && (
                <View>
                  <View style={{ marginTop: theme.screenPadding }}>
                    <Txt color="light">
                      {donation.organization.name} will gratefully use your donation to help with their cause: {donation.cause.name}
                    </Txt>
                  </View>
                  <View style={{ marginTop: theme.screenPadding }}>
                    <Txt color="light">
                      You made this donation on {moment(donation.createdAt).format('DD MMM YYYY')}
                    </Txt>
                  </View>
                </View>
              )}
              {donation.is_anonymous && (
                <View style={{ marginTop: theme.screenPadding }}>
                  <Txt color="light">
                    You gave this donation anonymously
                  </Txt>
                </View>
              )}
              {donation.message && (
                <View style={{ marginTop: theme.screenPadding }}>
                  <Txt color="light">
                    You left this message:
                  </Txt>
                  <Txt color="light">
                    {donation.message}
                  </Txt>
                </View>
              )}
            </View>
          </ImageBackground>
    );
  }
}

export default mapToProps(ViewDonation);