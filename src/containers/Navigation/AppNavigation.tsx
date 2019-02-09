import {
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";

import PreAuthNavigator from './PreAuthNavigation';
import PostAuthNavigator from "./PostAuthNavigation";

const AppNavigator = createSwitchNavigator({
  preAuth: PreAuthNavigator,
  loggedIn: PostAuthNavigator
}, {
  initialRouteName: 'preAuth'
});

export default createAppContainer(AppNavigator);