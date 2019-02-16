import React from 'react';
import { Text, TextStyle } from 'react-native';
import styles from './styles';

interface IH1Props {
  children: string;
  color: 'primary'|'secondary'|'default'|'light';
  style?: TextStyle;
}

const H1 = ({ children, color, style }: IH1Props) => {
  return (
    <Text style={[styles[color], style]}>
      {children}
    </Text>
  );
};

export default H1;
