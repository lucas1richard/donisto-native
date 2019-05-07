import * as React from 'react';
import { View, ScrollView } from 'react-native';
import styles from './styles';

export interface ISwipeProps {
  height?: number;
  hideIndex?: boolean;
  onIndexChanged?(): any;
}

class Swipe extends React.PureComponent<ISwipeProps> {
  state = {
    page: 0
  };

  onScroll = (ev: any) => {
    const { nativeEvent } = ev;
    const {
      layoutMeasurement,
      contentOffset
    } = nativeEvent;
    const page = Math.round(contentOffset.x / layoutMeasurement.width);
    this.setState({
      page
    });
    if (typeof this.props.onIndexChanged === 'function') {
      this.props.onIndexChanged();
    }
  }

  render() {
    const { page } = this.state;
    const { children, height, hideIndex } = this.props;

    const wrapperStyle: any[] = [styles.imgWrapper];
    if (height) {
      wrapperStyle.push({ height });
    }

    return (
      <View style={styles.wrapper}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={1000000}
          onScroll={this.onScroll}
        >
          {React.Children.map(children, (child) => child && (
            <View style={wrapperStyle}>
              {child}
            </View>
          ))}
        </ScrollView>
        {!hideIndex && (
          <View style={styles.dotWrapper}>
            {React.Children.map(children, (child, ix) => child && (
              <View
                style={page === ix ? styles.pageDotActive : styles.pageDot}
              />
            ))}
          </View>
        )}
      </View>
    );
  }
}

export default Swipe;
