import * as React from 'react';
import { View } from 'react-native';
import Txt from 'components/Txt';
import badgeStyles from './styles';

interface IBadgeProps {
  label: string;
}

class Badge extends React.PureComponent<IBadgeProps> {
  render() {
    const { label } = this.props;
    return (
      <View style={badgeStyles.wrapper}>
        <Txt color="light">
          {label}
        </Txt>
      </View>
    );
  }
}

export default Badge;