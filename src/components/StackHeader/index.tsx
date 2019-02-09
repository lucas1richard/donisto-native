import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { h1 } from 'styles/Headings';
import Left from './components/Left';
import Right from './components/Right';
import NavigationService from 'containers/Navigation/NavigationService';
import theme from 'theme/iftheme';

interface IStackHeaderProps {
  title?: string;
  noCloseOption?: boolean;
  noBackOption?: boolean;
  onClose?: () => any
}

class StackHeader extends React.Component<IStackHeaderProps> {
  static defaultProps = {
    title: ''
  };

  render() {
    const {
      noBackOption,
      noCloseOption,
      title,
      onClose
    } = this.props;
    return (
      <View style={styles.wrapper}>
        <Left
          noBackOption={noBackOption}
          onBack={NavigationService.back}
        />
        <Text style={h1({ color: theme.primary[500] })}>
          {title}
        </Text>
        <Right
          noCloseOption={noCloseOption}
          onClose={onClose}
        />
      </View>
    );
  }
}

export default StackHeader;

const styles = StyleSheet.create({
  wrapper: {
    height: 45,
    backgroundColor: '#fff',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    // flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: theme.primary[500],
    flexDirection: 'row'
  }
});
