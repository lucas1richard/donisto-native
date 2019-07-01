import * as React from 'react';
import { Switch, View } from 'react-native';
import { WrappedFieldInputProps } from 'redux-form';
import theme from 'theme/iftheme';

interface ISwitchComponentProps {
  input: WrappedFieldInputProps;
  toggledOn: any;
  toggledOff: any;
}

class SwitchComponent extends React.Component<ISwitchComponentProps> {
  toggle = () => {
    const { input, toggledOn, toggledOff } = this.props;
    if (input.value === toggledOn) {
      input.onChange(toggledOff);
    } else {
      input.onChange(toggledOn);
    }
  }

  render() {
    const { input, toggledOn } = this.props;
    return (
      <View>
        <Switch
          value={input.value === toggledOn}
          onValueChange={this.toggle}
          onTintColor={theme.primary[500]}
          thumbColor="#0000ff"
        />
      </View>
    );
  }
}

export default SwitchComponent;
