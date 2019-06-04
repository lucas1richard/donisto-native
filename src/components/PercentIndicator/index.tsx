import * as React from 'react';
import { View } from 'react-native';
import pIndicatorStyles from './styles';

class PercentIndicator extends React.PureComponent<{percent: number}> {
  render() {
    const { percent } = this.props;
    return (
      <View style={pIndicatorStyles.wrapper}>
        <View style={[pIndicatorStyles.bar, { width: `${percent}%` }]} />
      </View>
    );
  }
}

export default PercentIndicator;