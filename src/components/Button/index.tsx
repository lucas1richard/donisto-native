import React from 'react';
import { View, ButtonProperties } from 'react-native';
import Touchable from 'components/Touchable';
import { Text } from 'react-native';
import { viewStyles, textStyles } from './styles';
import theme from 'theme/iftheme';

interface IButtonProps extends ButtonProperties {
  title: string;
  onPress: () => any;
  variant?: 'text'|'contained'|'outlined'|'default'|'rounded';
  color?: 'primary'|'secondary'|'default';
  icon?: any
}

class Button extends React.Component<IButtonProps> {
  static defaultProps = {
    color: '_default',
    variant: 'default'
  };

  canPress: boolean = true;
  pressTimer: any;

  get textStyles() {
    const { color, variant } = this.props;
    if (variant === 'text') {
      switch (color) {
        case 'primary':
          return textStyles['text-primary'];
        case 'secondary':
          return textStyles['text-secondary'];
        default:
          return textStyles['text-default'];
      }
    }
    return textStyles[color];
  }

  get viewStyles() {
    const { color, variant } = this.props;
    if (variant === 'text') {
      return viewStyles.text;
    }
    return [viewStyles[color], viewStyles[variant]];
  }

  render() {
    const { onPress, title, icon } = this.props;
    return (
      <Touchable onPress={onPress}>
        <View style={this.viewStyles}>
          {icon ? (
            <View style={{ marginRight: theme.fontSize }}>
              {icon}
            </View>
          ) : undefined}
          <Text style={this.textStyles}>
            {title}
          </Text>
        </View>
      </Touchable>
    );
  }
}

export default Button;
