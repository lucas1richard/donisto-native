import * as React from 'react';
import Touchable from 'components/Touchable';
import { View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import theme from 'theme/iftheme';

const hitSlop = {
  top: 15,
  bottom: 15,
  left: 50,
  right: 50
};

export interface ILeftProps {
  noBackOption?: boolean,
  onBack: () => void
}

function Left({ noBackOption, onBack }: ILeftProps) {
  if (noBackOption) {
    return <View style={styles.wrapper} />;
  }

  return (
    <Touchable onPress={onBack} hitSlop={hitSlop}>
      <View style={styles.wrapper}>
        <Feather
          size={30}
          name="chevron-left"
          color={theme.primary[500]}
        />
      </View>
    </Touchable>
  );
}

export default Left;

const styles = StyleSheet.create({
  wrapper: {
    // padding: 2,
    // paddingRight: 4,
    // paddingBottom: 4,
    // borderRadius: 20
    height: 34,
    width: 34,
    padding: 2,
    borderRadius: 17,
    zIndex: 100
  }
});
