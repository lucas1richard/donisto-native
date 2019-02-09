import { TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';
const TouchablePrim = {
    android: TouchableNativeFeedback,
    ios: TouchableOpacity
};
export default TouchablePrim[Platform.OS];
//# sourceMappingURL=index.js.map