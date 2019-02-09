import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import mapToProps from './mapToProps';
import NewsFeedItem from './components/NewsFeedItem';
class NewsFeed extends React.Component {
    render() {
        const { newsfeed, loaded } = this.props;
        return (React.createElement(ScrollView, null,
            React.createElement(View, null,
                !loaded && (React.createElement(View, null,
                    React.createElement(Text, null, "Getting your news feed"))),
                newsfeed.map((item) => (React.createElement(NewsFeedItem, { key: item.id, item: item }))))));
    }
}
export default mapToProps(NewsFeed);
//# sourceMappingURL=index.js.map