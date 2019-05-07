import * as React from 'react';
import { View } from 'react-native';
import styles from './styles';
import TopRow from './components/TopRow';
import BottomRow from './components/BottomRow';
import Img from './components/Img';

export interface INewsFeedItemProps {
  item: any;
  img: any;
  navDetail: () => any
}

export interface INewsFeedItemState {
  modalVisible: boolean;
}

class NewsFeedItem extends React.Component<INewsFeedItemProps, INewsFeedItemState> {
  render() {
    const { item, img, navDetail } = this.props;
    return (
      <View>
        <View style={styles.wrapper}>
          <TopRow name={item.organization.name} />
          <Img
            navDetail={navDetail}
            img={img}
          />
          <BottomRow />
        </View>
      </View>
    );
  }
}

export default NewsFeedItem;
