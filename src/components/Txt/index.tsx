import React from 'react';
import { Text, TextProps } from 'react-native';
import styles from './styles';

interface ITxtProps extends TextProps {
  children: string;
  color: 'primary'|'secondary'|'default'|'light';
}

const Txt = ({ children, color }: ITxtProps) => {
  return (
    <Text style={styles[color]}>
      {children}
    </Text>
  );
};

export default Txt;
