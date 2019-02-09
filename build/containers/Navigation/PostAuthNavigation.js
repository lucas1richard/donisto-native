import React from 'react';
import { createBottomTabNavigator
// withNavigationFocus
 } from "react-navigation";
import routeNames from "./routeNames";
import { View } from "react-native";
import Profile from 'containers/Profile';
import NewsFeed from 'containers/NewsFeed';
const navigationOptions = {
    header: React.createElement(View, null)
};
const PostAuthNavigator = createBottomTabNavigator({
    [routeNames.PROFILE]: {
        navigationOptions,
        screen: Profile
    },
    [routeNames.NEWS_FEED]: {
        // navigationOptions,
        screen: NewsFeed
    }
}, {
    initialRouteName: routeNames.PROFILE
});
export default PostAuthNavigator;
//# sourceMappingURL=PostAuthNavigation.js.map