import * as React from 'react';
import { View } from 'react-native';
import styles from './styles';

export interface ICardProps {
  children: any;
}

function Card({ children }: ICardProps) {
  return (
    <View style={styles.wrapper}>
      {children}
    </View>
  );
}

export default Card;
