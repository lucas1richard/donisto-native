import React from 'react';
import { Text, TextProps } from 'react-native';
import styles from './styles';

interface ITxtProps extends TextProps {
  children: any;
  color?: 'primary'|'secondary'|'default'|'light';
}

const Txt = ({ children, color }: ITxtProps) => {
  return (
    <Text style={styles[color]}>
      {children}
    </Text>
  );
};

Txt.defaultProps = {
  color: 'default'
};

export default Txt;
