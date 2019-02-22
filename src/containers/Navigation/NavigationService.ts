import { NavigationActions, DrawerActions } from 'react-navigation';

class NavigationService {
  static _navigator: any;
  static setTopLevelNavigator(navigatorRef: any) {
    NavigationService._navigator = navigatorRef;
  }
  static navigate(routeName: string, params?: any) {
    if (NavigationService._navigator) {
      NavigationService._navigator.dispatch(
        NavigationActions.navigate({
          routeName,
          params
        })
      );
    }
  }
  static back() {
    if (NavigationService._navigator) {
      NavigationService._navigator.dispatch(
        NavigationActions.back()
      );
    }
  }
  static toggleDrawer() {
    if (NavigationService._navigator) {
      NavigationService._navigator.dispatch(
        DrawerActions.toggleDrawer()
      );
    }
  }
  static openDrawer() {
    if (NavigationService._navigator) {
      NavigationService._navigator.dispatch(
        DrawerActions.openDrawer()
      );
    }
  }
  static closeDrawer() {
    if (NavigationService._navigator) {
      NavigationService._navigator.dispatch(
        DrawerActions.closeDrawer()
      );
    }
  }
}

export default NavigationService;
