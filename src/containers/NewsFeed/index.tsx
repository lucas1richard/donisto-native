import * as React from 'react';
import { View, ScrollView, Text } from 'react-native';
import mapToProps from './mapToProps';
import NewsFeedItem from './components/NewsFeedItem';
import Loader from 'components/Loader';
import Screen from 'components/Screen';
import { Entypo } from '@expo/vector-icons';
import Touchable from 'components/Touchable';
import theme from 'theme/iftheme';
import newsFeedStyles from './styles';
import NewsFeedContact from './components/Contact';
import NavigationService from 'containers/Navigation/NavigationService';
import routeNames from 'containers/Navigation/routeNames';
import Button from 'components/Button';

interface INewsFeedProps {
  newsfeed: any[],
  loaded: boolean,
  organizations: any[];
  navDetail: (uuid: string) => any;
  getNewsFeed: () => any;
}

const images = [
  require('../../../assets/scenic-1.jpg'),
  require('../../../assets/happy-1.jpg'),
  require('../../../assets/scenic-2.jpg')
];

class NewsFeed extends React.Component<INewsFeedProps> {
  render() {
    const { newsfeed, loaded, getNewsFeed } = this.props;
    return (
      <Screen>
        <View style={newsFeedStyles.topWrapper}>
          <Touchable>
            <View style={{ marginLeft: 10, width: 90 }}>
              <Entypo
                name="camera"
                size={22}
                color={theme.primary[500]}
              />
            </View>
          </Touchable>
          <Text style={newsFeedStyles.feedText}>
            Feed
          </Text>
          <View>
            <Touchable onPress={() => NavigationService.navigate(routeNames.CHOOSE_ORGANIZATION_NI)}>
              <View style={newsFeedStyles.iconsWrapper}>
                <Entypo
                  name="plus"
                  size={28}
                  color={theme.primary[500]}
                  style={{ marginRight: 5 }}
                />
                <Entypo
                  name="dots-three-horizontal"
                  color={theme.primary[500]}
                  size={22}
                />
              </View>
            </Touchable>
          </View>
        </View>
        <ScrollView>
          <View>
            <ScrollView
              horizontal
              contentContainerStyle={{ paddingHorizontal: 7.5 }}
            >
              <NewsFeedContact name="Your" />
              <NewsFeedContact name="Alex" />
              <NewsFeedContact name="Linda" />
              <NewsFeedContact name="Jane" />
              <NewsFeedContact name="Jenny" />
              <NewsFeedContact name="Kevin" />
              <NewsFeedContact name="Nick" />
              <NewsFeedContact name="Richard" />
            </ScrollView>
          </View>
          <View style={newsFeedStyles.itemsWrapper}>
            {!loaded && (
              <View>
                <Loader />
              </View>
            )}
            <Button
              title="Load"
              color="primary"
              variant="contained"
              onPress={getNewsFeed}
            />
            {newsfeed.map((item, ix) => (
              <NewsFeedItem
                key={item.id}
                item={item}
                img={images[ix % (images.length)]}
                navDetail={() => this.props.navDetail(item.uuid)}
              />
            ))}
          </View>
        </ScrollView>
      </Screen>
    );
  }
}

export default mapToProps(NewsFeed);
