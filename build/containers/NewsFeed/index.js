import React from 'react';
import { View, ScrollView } from 'react-native';
import mapToProps from './mapToProps';
import NewsFeedItem from './components/NewsFeedItem';
import Loader from 'components/Loader';
const images = [
    require('../../../assets/scenic-1.jpg'),
    require('../../../assets/happy-1.jpg'),
    require('../../../assets/scenic-2.jpg')
];
class NewsFeed extends React.Component {
    render() {
        const { newsfeed, loaded } = this.props;
        return (React.createElement(ScrollView, null,
            React.createElement(View, null,
                !loaded && (React.createElement(View, null,
                    React.createElement(Loader, null))),
                newsfeed.map((item, ix) => (React.createElement(NewsFeedItem, { key: item.id, item: item, img: images[ix % (images.length)] }))))));
    }
}
export default mapToProps(NewsFeed);
//# sourceMappingURL=index.js.map