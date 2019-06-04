import * as React from 'react';
import { View, Image } from 'react-native';
import moment from 'moment';
import Txt from 'components/Txt';
import styles from './styles';
import Touchable from 'components/Touchable';
import logger from 'utilities/logger';
import { moneyMask } from 'utilities/masks';

interface IDonationComponentProps {
  img: NodeRequire,
  onPress: () => any;
  donation: IDonationDetail;
}

class Donation extends React.Component<IDonationComponentProps> {
  render() {
    const { img, onPress, donation } = this.props;
    logger.info(donation, 'Donation');
    return (
      <View style={styles.marginWrapper}>
        <Touchable onPress={onPress}>
          <View style={styles.outerWrapper}>
            <View style={styles.imageWrapper}>
              <Image source={img} style={styles.image} />
            </View>
            <View style={{ padding: 10 }}>
              <Txt style={{ fontSize: 13 }}>
                {moneyMask(donation.amount)}
              </Txt>
              <Txt style={{ fontSize: 13 }}>
                {donation.cause.name}
              </Txt>
              <Txt style={{ fontSize: 13/* , color: '#aaa' */ }} color="muted">
                on {moment(donation.createdAt).format('MMM DD, YYYY')}
              </Txt>
            </View>
          </View>
        </Touchable>
      </View>
    );
  }
}

export default Donation;