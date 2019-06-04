import * as React from 'react';
import { View } from 'react-native';
import H3 from 'components/H3';
import Txt from 'components/Txt';

export interface IBasicInfoSectionProps {
  city: string;
  state: string;
  zip: string;
  mission: string;
}

class BasicInfoSection extends React.PureComponent<IBasicInfoSectionProps> {
  get location() {
    const { city, state, zip } = this.props;
    const cityState = [];
    const cityStateZip = [];
    if (city) {
      cityState.push(city);
    }
    if (state) {
      cityState.push(state);
    }
    if (cityState.length > 0) {
      cityStateZip.push(cityState.join(', '));
    }
    if (zip) {
      cityStateZip.push(zip);
    }

    return cityStateZip.join(' ');
  }

  render() {
    const { mission } = this.props;
    return (
      <View>
        <H3 color="primary">
          Location:
        </H3>
        <Txt>
          {this.location}
        </Txt>
        <H3 color="primary">
          Mission Statement:
        </H3>
        <Txt>
          {mission}
        </Txt>
      </View>
    );
  }
}

export default BasicInfoSection;