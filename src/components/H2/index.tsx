import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

interface IH2Props {
  children: string;
  color: 'primary'|'secondary'|'default'|'light'
}

const H2 = ({ children, color }: IH2Props) => {
  return (
    <Text style={styles[color]}>
      {children}
    </Text>
  );
};

export default H2;
