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
const images = [
    require('../../../assets/scenic-1.jpg'),
    require('../../../assets/happy-1.jpg'),
    require('../../../assets/scenic-2.jpg')
];
class NewsFeed extends React.Component {
    render() {
        const { newsfeed, loaded } = this.props;
        return (React.createElement(Screen, null,
            React.createElement(View, { style: newsFeedStyles.topWrapper },
                React.createElement(Touchable, null,
                    React.createElement(View, { style: { marginLeft: 10, width: 90 } },
                        React.createElement(Entypo, { name: "camera", size: 22, color: theme.primary[500] }))),
                React.createElement(Text, { style: newsFeedStyles.feedText }, "Feed"),
                React.createElement(View, null,
                    React.createElement(Touchable, { onPress: () => NavigationService.navigate(routeNames.CHOOSE_CAUSE_NI) },
                        React.createElement(View, { style: newsFeedStyles.iconsWrapper },
                            React.createElement(Entypo, { name: "plus", size: 28, color: theme.primary[500], style: { marginRight: 5 } }),
                            React.createElement(Entypo, { name: "dots-three-horizontal", color: theme.primary[500], size: 22 }))))),
            React.createElement(ScrollView, null,
                React.createElement(View, null,
                    React.createElement(ScrollView, { horizontal: true, contentContainerStyle: { paddingHorizontal: 7.5 } },
                        React.createElement(NewsFeedContact, { name: "Your" }),
                        React.createElement(NewsFeedContact, { name: "Alex" }),
                        React.createElement(NewsFeedContact, { name: "Linda" }),
                        React.createElement(NewsFeedContact, { name: "Jane" }),
                        React.createElement(NewsFeedContact, { name: "Jenny" }),
                        React.createElement(NewsFeedContact, { name: "Kevin" }),
                        React.createElement(NewsFeedContact, { name: "Nick" }),
                        React.createElement(NewsFeedContact, { name: "Richard" }))),
                React.createElement(View, { style: newsFeedStyles.itemsWrapper },
                    !loaded && (React.createElement(View, null,
                        React.createElement(Loader, null))),
                    newsfeed.map((item, ix) => (React.createElement(NewsFeedItem, { key: item.id, item: item, img: images[ix % (images.length)], navDetail: () => this.props.navDetail(item.uuid) })))))));
    }
}
export default mapToProps(NewsFeed);
//# sourceMappingURL=index.js.map