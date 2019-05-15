import React from 'react';
import { Picker as RNPicker, View, StyleSheet } from 'react-native';
import Txt from 'components/Txt';
import theme from 'theme/iftheme';

function Picker({ input, children, label, style, ...rest }) {
  return (
    <View style={[styles.wrapper, style]}>
      {label && <Txt>{label}</Txt>}
      <RNPicker
        selectedValue={input.value}
        onValueChange={input.onChange}
        {...rest}
        // style={{ fontSize: 32 }}
      >
        {children}
      </RNPicker>
    </View>
  );
}

export default Picker;

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    borderColor: theme.pristineInputGray,
    borderRadius: 4,
    marginBottom: 4
  }
});
