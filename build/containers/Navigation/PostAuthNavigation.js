import React from 'react';
import { createBottomTabNavigator } from "react-navigation";
import routeNames from "./routeNames";
import NewsFeed from 'containers/NewsFeed';
import Donations from 'containers/Donations';
import Discover from 'containers/Discover';
import Messages from 'containers/Messages';
import Contact from 'containers/Contact';
import { FontAwesome, Entypo, Feather } from "@expo/vector-icons";
const PostAuthNavigator = createBottomTabNavigator({
    [routeNames.NEWS_FEED]: {
        navigationOptions: {
            tabBarLabel: 'Feed',
            tabBarIcon: ({ focused }) => (React.createElement(Entypo, { size: 20, name: "news", style: { textAlign: 'center', color: focused ? 'blue' : 'gray' } }))
        },
        screen: NewsFeed
    },
    [routeNames.DISCOVER]: {
        navigationOptions: {
            tabBarLabel: 'Discover',
            tabBarIcon: ({ focused }) => (React.createElement(Entypo, { size: 20, name: "magnifying-glass", style: { textAlign: 'center', color: focused ? 'blue' : 'gray' } }))
        },
        screen: Discover
    },
    [routeNames.DONATIONS]: {
        navigationOptions: {
            tabBarLabel: 'Donations',
            tabBarIcon: ({ focused }) => (React.createElement(FontAwesome, { size: 20, name: "money", style: { textAlign: 'center', color: focused ? 'blue' : 'gray' } }))
        },
        screen: Donations
    },
    [routeNames.MESSAGES]: {
        navigationOptions: {
            tabBarLabel: 'Messages',
            tabBarIcon: ({ focused }) => (React.createElement(Feather, { size: 20, name: "message-square", style: { textAlign: 'center', color: focused ? 'blue' : 'gray' } }))
        },
        screen: Messages
    },
    [routeNames.PROFILE]: {
        navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: ({ focused }) => (React.createElement(FontAwesome, { size: 20, name: "user-o", style: { textAlign: 'center', color: focused ? 'blue' : 'gray' } }))
        },
        screen: Contact
    }
}, {
    initialRouteName: routeNames.PROFILE
});
export default PostAuthNavigator;
//# sourceMappingURL=PostAuthNavigation.js.map