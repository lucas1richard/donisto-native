import * as React from 'react';
import { View, ImageBackground } from 'react-native';
import theme from 'theme/iftheme';
import mapToProps from './mapToProps';
import { moneyMask } from 'utilities/masks';
import Badge from 'components/Badge';
import H1 from 'components/H1';

class ViewDonation extends React.Component<any> {
  render() {
    const { donation } = this.props;
    return (
          <ImageBackground
            source={require('../../../../../assets/happy-1.jpg')}
            style={{
              height: '100%',
              justifyContent: 'space-between',
              backgroundColor: '#000'
            }}
            imageStyle={{
              height: theme.windowHeight,
              width: theme.windowWidth,
              flex: 1
            }}
          >
            <View style={{
              flex: 1,
              backgroundColor: 'rgba(0,0,0,0.6)',
              paddingHorizontal: theme.screenPadding,
              paddingVertical: 60
            }}>
              <H1 color="light">
                {moneyMask(donation.amount)}
              </H1>
              <Badge label={donation.cause.name} />
            </View>
          </ImageBackground>
    );
  }
}

export default mapToProps(ViewDonation);