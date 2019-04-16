import React from 'react';
import { View/* , Image */ } from 'react-native';
import Txt from 'components/Txt';
import mapToProps from './mapToProps';
import H2 from 'components/H2';
import theme from 'theme/iftheme';
import Screen from 'components/Screen';

class NewsItemDetail extends React.Component<any> {
  render() {
    const { detailItem } = this.props;
    return (
      <Screen>
        <View style={{ padding: theme.screenPadding, paddingTop: 60 }}>
          {/* <Image
            source={img}
            style={styles.img}
          /> */}
          <H2>{detailItem.title}</H2>
          <Txt>
            {detailItem.text}
          </Txt>
        </View>
      </Screen>
    );
  }
}

export default mapToProps(NewsItemDetail);
