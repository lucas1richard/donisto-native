import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import theme from 'theme/iftheme';

export interface IMarginWrapperProps {
  children: any;
}

const MarginWrapper = ({ children }: IMarginWrapperProps) => (
  <View style={styles.wrapper}>
    {children}
  </View>
);

export default MarginWrapper;

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: theme.fs / 2
  }
});
