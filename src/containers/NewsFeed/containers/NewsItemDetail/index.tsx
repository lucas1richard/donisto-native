import * as React from 'react';
import { View/* , Image */ } from 'react-native';
import Txt from 'components/Txt';
import mapToProps from './mapToProps';
import H2 from 'components/H2';
import theme from 'theme/iftheme';
import Screen from 'components/Screen';
import NewsItemDetailHeader from './components/Header';
import Badge from 'components/Badge';

class NewsItemDetail extends React.Component<any> {
  componentDidMount() {
    if (!this.props.detailItem.detailFetched) {
      this.props.getDetail(this.props.detailItem.uuid);
    }
  }

  get hasCauses() {
    return !!this.props.detailItem.causes;
  }

  render() {
    const { detailItem } = this.props;
    return (
      <Screen>
        <NewsItemDetailHeader />
        <View style={{ padding: theme.screenPadding }}>
          {/* <Image
            source={img}
            style={styles.img}
          /> */}
          <H2>
            {detailItem.title}
          </H2>
          <Txt>
            {detailItem.text}
          </Txt>
          {this.hasCauses && (
            <View>
              <H2>Associated Causes:</H2>
            </View>
          )}
          {this.hasCauses && (
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
              {detailItem.causes.map((cause: any) => (
                <Badge label={cause.name} key={cause.uuid} />
              ))}
            </View>
          )}
        </View>
      </Screen>
    );
  }
}

export default mapToProps(NewsItemDetail);
