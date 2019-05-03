import * as React from 'react';
import { View } from 'react-native';
import Txt from 'components/Txt';
import Touchable from 'components/Touchable';
import styles from './styles';

interface INICauseProps {
  name: string;
  selected: boolean;
  toggleSelect: () => any;
}

const Selected = () => (
  <View style={styles.selectedWrapper}>
    <Txt color="light">Selected</Txt>
  </View>
);

const Select = () => (
  <View style={styles.selectWrapper}>
    <Txt color="light">Select</Txt>
  </View>
);

class NICause extends React.Component<INICauseProps> {
  render() {
    const {
      name,
      selected,
      toggleSelect
    } = this.props;

    return (
      <View style={styles.wrapper}>
        <Txt>{name}</Txt>
        <Touchable onPress={toggleSelect}>
          <View>
            {selected
              ? <Selected />
              : <Select />
            }
          </View>
        </Touchable>
      </View>
    );
  }
}

export default NICause;