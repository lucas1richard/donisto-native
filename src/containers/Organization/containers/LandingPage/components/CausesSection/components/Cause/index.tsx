import * as React from 'react';
import { View } from 'react-native';
import Txt from 'components/Txt';
import moment from 'moment';
import theme from 'theme/iftheme';
import styles from './styles';
import { moneyMask } from 'utilities/masks';
import PercentIndicator from 'components/PercentIndicator';
import Touchable from 'components/Touchable';
import { createSelector } from 'reselect';
import logger from 'utilities/logger';

interface ILandingPageCauseProps {
  uuid: string;
  donations: IDonation.WithContact[];
  createdAt: string;
  updatedAt: string;
  name: string;
  goal_amount: number;
  viewCauseDetail: (uuid: string) => any;
}

const totalDonationsSelector = createSelector(
  (donations) => donations,
  (donations: IDonation.WithContact[]) => {
    try {
      logger.info('calculating', 'totalDonationsSelector');
      return donations.reduce((memo, donation) => memo + donation.amount, 0);
    } catch (err) {
      return 0;
    }
  }
);

class LandingPageCause extends React.PureComponent<ILandingPageCauseProps> {
  render() {
    const {
      uuid,
      donations,
      createdAt,
      updatedAt,
      name,
      goal_amount,
      viewCauseDetail
    } = this.props;

    const donationsTotal = totalDonationsSelector(donations);
    return (
      <Touchable onPress={() => viewCauseDetail(uuid)}>
        <View style={styles.causeWrapper}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Txt style={{ maxWidth: '48%' }}>
              {name}
            </Txt>
            {donations && (
              <Txt color="muted" style={{ maxWidth: '48%' }}>
                {donations.length} Donation{donations.length !== 1 && 's'}
              </Txt>
            )}
          </View>
          <View>
            <Txt color="muted" style={{ fontSize: theme.fontSize * 0.8 }}>
              Created: {moment(createdAt).format('D MMMM Y')}
            </Txt>
            {updatedAt !== createdAt && (
              <Txt color="muted" style={{ fontSize: theme.fontSize * 0.8 }}>
                Updated: {moment(updatedAt).format('D MMMM Y')}
              </Txt>
            )}
          </View>
          <View>
            <Txt>
              Progress: {moneyMask(donationsTotal)} of {moneyMask(goal_amount)}
            </Txt>
            <PercentIndicator percent={donationsTotal * 100 / goal_amount} />
          </View>
        </View>
      </Touchable>
    );
  }
}

export default LandingPageCause;