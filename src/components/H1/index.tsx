import React from 'react';
import { Text, TextProperties } from 'react-native';
import styles from './styles';

interface IH1Props extends TextProperties {
  children: string;
  color?: 'primary'|'secondary'|'default'|'light';
}

const H1 = ({ children, color, style }: IH1Props) => {
  return (
    <Text style={[styles[color], style]}>
      {children}
    </Text>
  );
};

H1.defaultProps = {
  color: 'default'
};

export default H1;
