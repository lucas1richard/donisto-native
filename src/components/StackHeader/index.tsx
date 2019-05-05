import * as React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import Left from './components/Left';
import Right from './components/Right';
import NavigationService from 'containers/Navigation/NavigationService';
import theme from 'theme/iftheme';
import H1 from 'components/H1';

export interface IStackHeaderProps {
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
      <SafeAreaView>
        <View style={styles.wrapper}>
          <Left
            noBackOption={noBackOption}
            onBack={NavigationService.back}
          />
          <H1 color="primary">
            {title}
          </H1>
          <Right
            noCloseOption={noCloseOption}
            onClose={onClose}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default StackHeader;

const styles = StyleSheet.create({
  wrapper: {
    // height: 45,
    // backgroundColor: '#fff',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    // flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: theme.primary[500],
    flexDirection: 'row'
  }
});
