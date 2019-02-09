import React from 'react';
import { createStackNavigator, withNavigationFocus } from "react-navigation";
import routeNames from "containers/Navigation/routeNames";
import RegistrationBasicInfo from "./containers/BasicInfo";
import { View } from "react-native";
import StackHeader from 'components/StackHeader';
import RegistrationContactType from './containers/ContactType';
const AppNavigator = createStackNavigator({
    [routeNames.REGISTRATION_BASIC_INFO]: {
        navigationOptions: {
            header: React.createElement(StackHeader, { title: "Registration", noCloseOption: true })
        },
        screen: withNavigationFocus(RegistrationBasicInfo)
    },
    [routeNames.REGISTRATION_CONTACT_TYPE]: {
        navigationOptions: {
            header: React.createElement(StackHeader, { title: "Registration", noCloseOption: true })
        },
        screen: withNavigationFocus(RegistrationContactType)
    }
}, {
    initialRouteName: routeNames.REGISTRATION_BASIC_INFO,
    navigationOptions: {
        header: React.createElement(View, null)
    }
});
export default AppNavigator;
//# sourceMappingURL=router.js.map