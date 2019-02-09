import React from 'react';
import { View } from 'react-native';
import Touchable from 'components/Touchable';
import { Text } from 'react-native';
import { viewStyles, textStyles } from './styles';

interface IButtonProps {
  title: string;
  onPress: () => any;
  variant?: 'text'|'contained'|'outlined'|'default';
  color?: 'primary'|'secondary'|'default'
}

class Button extends React.Component<IButtonProps> {
  static defaultProps = {
    color: '_default',
    variant: 'default'
  };

  canPress: boolean = true;
  pressTimer: any;

  render() {
    const { onPress, title, color } = this.props;
    return (
      <Touchable onPress={onPress}>
        <View style={[viewStyles[color]]}>
          <Text style={[textStyles[color]]}>
            {title}
          </Text>
        </View>
      </Touchable>
    );
  }
}

export default Button;
