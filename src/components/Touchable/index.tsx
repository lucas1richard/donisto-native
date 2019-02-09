import { TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';

interface ITouchablePrim {
  [x: string]: any
}

const TouchablePrim: ITouchablePrim = {
  android: TouchableNativeFeedback,
  ios: TouchableOpacity
};

export default TouchablePrim[Platform.OS];
