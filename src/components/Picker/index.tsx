import * as React from 'react';
import { Picker as RNPicker, View, StyleSheet } from 'react-native';
import Txt from 'components/Txt';
import theme from 'theme/iftheme';

export interface IPickerProps {
  input: any;
  children: any;
  label: string;
  style: any;
}

function Picker({ input, children, label, style, ...rest }: IPickerProps) {
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
