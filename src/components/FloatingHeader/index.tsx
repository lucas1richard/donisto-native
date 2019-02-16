import React from 'react';
import { View, StyleSheet } from 'react-native';
import Left from './components/Left';
import Right from './components/Right';
import NavigationService from 'containers/Navigation/NavigationService';
import theme from 'theme/iftheme';

interface IFloatingHeaderProps {
  title?: string;
  noCloseOption?: boolean;
  noBackOption?: boolean;
  onClose?: () => any
}

class FloatingHeader extends React.Component<IFloatingHeaderProps> {
  static defaultProps = {
    title: ''
  };

  render() {
    const {
      noBackOption,
      noCloseOption,
      // title,
      onClose
    } = this.props;
    return (
      <View style={styles.wrapper}>
        <Left
          noBackOption={noBackOption}
          onBack={NavigationService.back}
        />
        {/* <Text style={h1({ color: theme.primary[500] })}>
          {title}
        </Text> */}
        <Right
          noCloseOption={noCloseOption}
          onClose={onClose}
        />
      </View>
    );
  }
}

export default FloatingHeader;

const styles = StyleSheet.create({
  wrapper: {
    // alignItems: 'flex-end',
    // justifyContent: 'space-between',
    // flex: 1,
    position: 'relative',
    borderBottomWidth: 1,
    borderBottomColor: theme.primary[500]
    // flexDirection: 'row'
  }
});
