import * as React from 'react';
import { Text, TextProps } from 'react-native';
import styles from './styles';

export interface ITxtProps extends TextProps {
  children: any;
  color?: 'primary'|'secondary'|'default'|'light'|'muted';
}

const Txt = ({ children, color, style, ...rest }: ITxtProps) => {
  return (
    <Text style={[styles[color], style]} {...rest}>
      {children}
    </Text>
  );
};

Txt.defaultProps = {
  color: 'default'
};

export default Txt;
