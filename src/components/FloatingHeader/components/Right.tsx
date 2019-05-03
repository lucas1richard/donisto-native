import * as React from 'react';
import Touchable from 'components/Touchable';
import { View, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import theme from 'theme/iftheme';

const hitSlop = {
  top: 15,
  bottom: 15,
  left: 50,
  right: 50
};

function Right({ noCloseOption, onClose }: {
  noCloseOption?: boolean,
  blue?: boolean,
  style?: Object,
  onClose: () => void
}) {
  if (noCloseOption) {
    return <View style={styles.wrapper} />;
  }

  return (
    <Touchable onPress={onClose} hitSlop={hitSlop}>
      <View style={styles.wrapper}>
        <MaterialIcons
          size={30}
          name="close"
          style={{ textAlign: 'center' }}
          color={theme.blue}
        />
      </View>
    </Touchable>
  );
}

export default Right;

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: 12,
    right: 12,
    // backgroundColor: 'rgba(0,0,0,0.1)',
    height: 34,
    width: 34,
    padding: 2,
    borderRadius: 17,
    zIndex: 100
  }
});
