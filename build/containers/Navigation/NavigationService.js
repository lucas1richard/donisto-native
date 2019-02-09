import { NavigationActions } from 'react-navigation';
class NavigationService {
    static setTopLevelNavigator(navigatorRef) {
        NavigationService._navigator = navigatorRef;
    }
    static navigate(routeName, params) {
        if (NavigationService._navigator) {
            NavigationService._navigator.dispatch(NavigationActions.navigate({
                routeName,
                params
            }));
        }
    }
    static back() {
        if (NavigationService._navigator) {
            NavigationService._navigator.dispatch(NavigationActions.back());
        }
    }
}
export default NavigationService;
//# sourceMappingURL=NavigationService.js.map