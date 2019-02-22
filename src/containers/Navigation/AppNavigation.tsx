import {
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";

import PreAuthNavigator from './PreAuthNavigation';
import PostAuthNavigator from "./PostAuthNavigation";
import PostAuthOrgNavigator from "./PostAuthOrgNavigation";

const AppNavigator = createSwitchNavigator({
  preAuth: PreAuthNavigator,
  loggedIn: PostAuthNavigator,
  organization: PostAuthOrgNavigator
}, {
  initialRouteName: 'preAuth'
});

export default createAppContainer(AppNavigator);