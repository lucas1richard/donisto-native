import * as React from 'react';
import { Text } from 'react-native';
import styles from './styles';

export interface IH3Props {
  children: string;
  color?: 'primary'|'secondary'|'default'|'light'
}

const H3 = ({ children, color }: IH3Props) => {
  return (
    <Text style={styles[color]}>
      {children}
    </Text>
  );
};

H3.defaultProps = {
  color: 'default'
};

export default H3;
