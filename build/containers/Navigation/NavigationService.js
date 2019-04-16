import { NavigationActions, DrawerActions } from 'react-navigation';
import logger from 'utilities/logger';
const log = (msg) => logger.log(msg, 'NavigationService');
class NavigationService {
    static setTopLevelNavigator(navigatorRef) {
        NavigationService._navigator = navigatorRef;
    }
    static navigate(routeName, params) {
        if (NavigationService._navigator) {
            params
                ? log(`navigate to ${routeName} with params ${JSON.stringify(params)}`)
                : log(`navigate to ${routeName}`);
            NavigationService._navigator.dispatch(NavigationActions.navigate({
                routeName,
                params
            }));
        }
    }
    static back() {
        if (NavigationService._navigator) {
            log(`navigate back`);
            NavigationService._navigator.dispatch(NavigationActions.back());
        }
    }
    static toggleDrawer() {
        if (NavigationService._navigator) {
            log(`toggle drawer`);
            NavigationService._navigator.dispatch(DrawerActions.toggleDrawer());
        }
    }
    static openDrawer() {
        if (NavigationService._navigator) {
            log(`open drawer`);
            NavigationService._navigator.dispatch(DrawerActions.openDrawer());
        }
    }
    static closeDrawer() {
        if (NavigationService._navigator) {
            log(`close drawer`);
            NavigationService._navigator.dispatch(DrawerActions.closeDrawer());
        }
    }
}
export default NavigationService;
//# sourceMappingURL=NavigationService.js.map